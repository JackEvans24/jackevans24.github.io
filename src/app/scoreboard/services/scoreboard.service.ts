import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction, snapshotChanges } from '@angular/fire/database';

import { filter, map, tap } from 'rxjs/operators';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';
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

    public async addGame(newGame: Game, newBoardGame: BoardGame | null = null): Promise<void> {
        if (newBoardGame !== null) {
            const addedBoardGame = this.firebase.list(this.boardGamesPath).push(newBoardGame);
            if (addedBoardGame.key === null) {
                throw new Error('Unable to add new board game');
            }

            newGame.gameId = addedBoardGame.key;
        }

        newGame.date = new Date(newGame.date).toISOString();

        const addedGame = await this.firebase.list(this.gamesPath).push(newGame);
        if (addedGame.key === null) {
            return;
        }
        const key = addedGame.key;

        this.addKeyToRecord(`${this.boardGamesPath}/${newGame.gameId}/games`, key);

        Object.keys(newGame.players).forEach((playerKey: string) =>
            this.addKeyToRecord(`${this.playersPath}/${playerKey}/games`, key)
        );
    }

    // ** HELPERS **

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