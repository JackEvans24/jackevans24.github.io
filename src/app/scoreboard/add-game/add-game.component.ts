import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AddBoardGameComponent } from '../dialogs/add-board-game/add-board-game.component';
import { AddBoardGameComponentData } from '../dialogs/add-board-game/add-board-game.data';
import { AddPlayerComponent } from '../dialogs/add-player/add-player.component';
import { AddPlayerComponentData } from '../dialogs/add-player/add-player.data';
import { AddGameRequest } from '../models/add-game-request';
import { BoardGameWithKey } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { newPlayerKey, Player, PlayerWithKey } from '../models/scoreboard-player';
import { AddGame, RefreshScoreboardData } from '../store/scoreboard.actions';
import { ScoreboardState } from '../store/scoreboard.state';

const newGameKey = '#newGame';

@Component({
    selector: 'app-add-game',
    templateUrl: './add-game.component.html',
    styleUrls: ['./add-game.component.scss']
})
@UntilDestroy()
export class AddGameComponent implements OnInit {
    public boardGames: BoardGameWithKey[] = [];
    public players: PlayerWithKey[] = [];

    public form: FormGroup;
    public error = '';
    public maxDate = new Date();

    public newGameKey = newGameKey;
    public newPlayerKey = newPlayerKey;

    get selectedPlayers(): FormArray {
        // tslint:disable-next-line:no-string-literal
        return (this.form.controls['players'] as FormArray);
    }

    constructor(private store: Store, private fb: FormBuilder, private router: Router, private dialog: MatDialog) {
        this.form = this.createForm();
        this.addPlayer();
    }

    ngOnInit(): void {
        this.getStoreData();
    }

    private createForm(): FormGroup {
        return this.fb.group({
            date: new FormControl(new Date(), [Validators.required]),
            gameId: new FormControl(null, [Validators.required]),
            players: this.fb.array([], [Validators.minLength(1)])
        });
    }

    private getStoreData(): void {
        this.store
            .select(ScoreboardState.boardGamesArray)
            .pipe(untilDestroyed(this))
            .subscribe(boardGames => this.boardGames = boardGames.sort((a, b) => a.name > b.name ? 1 : -1));

        this.store
            .select(ScoreboardState.playersArray)
            .pipe(untilDestroyed(this))
            .subscribe(players => this.players = players.sort((a, b) => a.name > b.name ? 1 : -1));

        this.store.dispatch(new RefreshScoreboardData());
    }

    public addPlayer(): void {
        const player = this.fb.group({
            id: new FormControl(null, [Validators.required]),
            score: new FormControl(0, [Validators.required])
        });

        this.selectedPlayers.push(player);
    }

    public onGameSelected(selectionChange: MatSelectChange): void {
        if (selectionChange.value !== newGameKey) {
            return;
        }

        this.form.get('gameId')?.setValue(null);

        const data: AddBoardGameComponentData = {
            title: 'Add Game',
            label: 'Game Name',
            boardGameNames: Object.values(this.boardGames).map(bg => bg.name)
        };

        this.dialog.open(AddBoardGameComponent, { data, minWidth: '50%', width: '30rem' })
            .afterClosed()
            .subscribe((value: string) => {
                if (!(value || '').length) {
                    return;
                }

                this.boardGames.push({ key: newGameKey, name: value, games: {} });
                this.form.get('gameId')?.setValue(newGameKey);
            });
    }

    public onPlayerSelected(selectionChange: MatSelectChange, index: number): void {
        if (selectionChange.value !== newPlayerKey) {
            return;
        }

        const playerControl = this.selectedPlayers.controls[index];
        if (playerControl === null) {
            return;
        }

        playerControl.get('id')?.setValue(null);

        const data: AddPlayerComponentData = {
            title: 'Add Player',
            label: 'Player Name',
            playerNames: this.players
                .filter(player => player.key.indexOf(newPlayerKey) !== 0)
                .map(player => player.name)
        };

        this.dialog.open(AddPlayerComponent, { data, minWidth: '50%', width: '30rem' })
            .afterClosed()
            .subscribe((value: string) => {
                if (!(value || '').length) {
                    return;
                }

                const key = newPlayerKey + value;
                this.players.push({ key, name: value, dateCreated: new Date(), games: {} });
                playerControl.get('id')?.setValue(key);
            });
    }

    public playerIsSelected(thisControlIndex: number, playerId: string): boolean {
        const thisControl = this.selectedPlayers.at(thisControlIndex);
        return this.selectedPlayers.controls.some(control => control !== thisControl && control.get('id')?.value === playerId);
    }

    public removePlayer(i: number): void {
        this.selectedPlayers.removeAt(i);
    }

    public save(): void {
        this.error = '';
        if (!this.form.valid) {
            this.error = 'Fix form errors before continuing';
            return;
        }

        const game: Game = {
            gameId: this.form.get('gameId')?.value,
            date: this.form.get('date')?.value,
            players: this.selectedPlayers.controls
                .reduce((acc, control) => {
                    acc[control.get('id')?.value] = control.get('score')?.value;
                    return acc;
                }, {} as Record<string, number>)
        };
        const request: AddGameRequest = { game, players: {} };

        if (game.gameId === newGameKey) {
            const newBoardGame = this.boardGames.find(boardGame => boardGame.key === newGameKey);
            if ((newBoardGame || null) === null) {
                this.error = 'Error adding new board game, please refresh and try again';
                return;
            }

            request.boardGame = newBoardGame;
        }

        Object.keys(game.players)
            .filter(playerKey => playerKey.indexOf(newPlayerKey) === 0)
            .forEach(playerKey => {
                const newPlayer = this.players.find(player => player.key === playerKey);
                if ((newPlayer || null) === null) {
                    this.error = 'Error adding new player, please refresh and try again';
                    return;
                }

                request.players[playerKey] = newPlayer as Player;
            });

        this.store.dispatch(new AddGame(request))
            .pipe(untilDestroyed(this))
            .subscribe(() => this.router.navigateByUrl('scoreboard/games'));
    }
}
