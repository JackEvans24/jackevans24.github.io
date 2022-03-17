import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';
import { AddGame, RefreshScoreboardData } from '../store/scoreboard.actions';
import { ScoreboardState } from '../store/scoreboard.state';

@Component({
    selector: 'app-add-game',
    templateUrl: './add-game.component.html',
    styleUrls: ['./add-game.component.scss']
})
@UntilDestroy()
export class AddGameComponent implements OnInit {
    public boardGamesMap: Record<string, BoardGame> = {};
    public playersMap: Record<string, Player> = {};

    public form: FormGroup;
    public error = '';
    public maxDate = new Date();

    get selectedPlayers(): FormArray {
        // tslint:disable-next-line:no-string-literal
        return (this.form.controls['players'] as FormArray);
    }

    constructor(private store: Store, private fb: FormBuilder, private router: Router) {
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
            .select(ScoreboardState.boardGamesMap)
            .pipe(untilDestroyed(this))
            .subscribe(boardGamesMap => this.boardGamesMap = boardGamesMap);

        this.store
            .select(ScoreboardState.playersMap)
            .pipe(untilDestroyed(this))
            .subscribe(playersMap => this.playersMap = playersMap);

        this.store.dispatch(new RefreshScoreboardData());
    }

    public addPlayer(): void {
        const player = this.fb.group({
            id: new FormControl(null, [Validators.required]),
            score: new FormControl(0, [Validators.required])
        });

        this.selectedPlayers.push(player);
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

        this.store.dispatch(new AddGame(game))
            .pipe(untilDestroyed(this))
            .subscribe(() => this.router.navigateByUrl('scoreboard/games'));
    }
}
