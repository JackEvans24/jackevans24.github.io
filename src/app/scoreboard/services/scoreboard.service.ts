import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction, snapshotChanges } from '@angular/fire/database';

import { filter, map, tap } from 'rxjs/operators';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AddGameRequest } from '../models/add-game-request';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { newPlayerKey, Player } from '../models/scoreboard-player';
import { UpdateBoardGames, UpdateGames, UpdatePlayers } from '../store/scoreboard.actions';

@UntilDestroy()
@Injectable({
    providedIn: 'root'
})
export class ScoreboardService {
    protected boardGamesPath = '/board-games';
    protected gamesPath = '/games';
    protected playersPath = '/players';

    constructor(protected firebase: AngularFireDatabase, protected store: Store) {}

    // ** BOARD GAMES **

    public getAllBoardGames(): void {
        this.firebase.list<BoardGame>(this.boardGamesPath)
            .snapshotChanges()
            .pipe(
                untilDestroyed(this),
                map(boardGames => this.snapshotToRecord(boardGames, boardGame => boardGame)),
                tap(boardGames => this.store.dispatch(new UpdateBoardGames(boardGames)))
            )
            .subscribe();
    }

    // ** PLAYERS **

    public getAllPlayers(): void {
        this.firebase.list<Player>(this.playersPath)
            .snapshotChanges()
            .pipe(
                untilDestroyed(this),
                map(snapshots => this.snapshotToRecord(snapshots, player => player)),
                tap(players => this.store.dispatch(new UpdatePlayers(players)))
            )
            .subscribe();
    }

    // ** GAMES **

    public getAllGames(): void {
        this.firebase.list<Game>(this.gamesPath, ref => ref.orderByChild('date'))
            .snapshotChanges()
            .pipe(
                untilDestroyed(this),
                map(games => this.snapshotToRecord(games, game => {
                        game.date = new Date(game.date);
                        return game;
                    })
                ),
                tap(games => this.store.dispatch(new UpdateGames(games)))
            )
            .subscribe();
    }

    public async addGame(addGameRequest: AddGameRequest): Promise<void> {
        this.addNewBoardGame(addGameRequest);
        this.addNewPlayers(addGameRequest);

        addGameRequest.game.date = new Date(addGameRequest.game.date).toISOString();

        const addedGame = await this.firebase.list(this.gamesPath).push(addGameRequest.game);
        if (addedGame.key === null) {
            return;
        }
        const key = addedGame.key;

        this.addKeyToRecord(`${this.boardGamesPath}/${addGameRequest.game.gameId}/games`, key);

        Object.keys(addGameRequest.game.players).forEach((playerKey: string) =>
            this.addKeyToRecord(`${this.playersPath}/${playerKey}/games`, key)
        );
    }

    // ** HELPERS **

    private addNewBoardGame(request: AddGameRequest): void {
        if (!request.boardGame) {
            return;
        }

        const addedBoardGame = this.firebase.list(this.boardGamesPath).push(request.boardGame);
        if (addedBoardGame.key === null) {
            throw new Error('Unable to add new board game');
        }

        request.game.gameId = addedBoardGame.key;
    }

    private addNewPlayers(request: AddGameRequest): void {
        if (Object.keys(request.players).length === 0) {
            return;
        }

        Object.keys(request.game.players)
            .filter(key => key.indexOf(newPlayerKey) === 0)
            .forEach(key => {
                const player = request.players[key];
                if (!player) {
                    throw new Error('New player not found in records');
                }

                const addedPlayer = this.firebase.list(this.playersPath).push(player);
                if (addedPlayer.key === null) {
                    throw new Error('Unable to add new player');
                }

                const scoreValue = request.game.players[key];
                delete request.game.players[key];
                request.game.players[addedPlayer.key] = scoreValue;
            });
    }

    private snapshotToRecord<T>(
        snapshots: SnapshotAction<T>[],
        transformation: (item: T) => T
    ): Record<string, T> {
        return snapshots
            .filter(snapshot => snapshot.payload.exists())
            .reduce((records, snapshot) => {
                if (snapshot.key !== null) {
                    let item = snapshot.payload.val() as T;
                    item = transformation(item);
                    records[snapshot.key] = item;
                }
                return records;
            }, {} as Record<string, T>);
    }

    private addKeyToRecord(path: string, key: string): void {
        const record: Partial<Record<string, boolean>> = {};
        record[key] = true;

        this.firebase.object<Record<string, boolean>>(path).update(record);
    }
}
