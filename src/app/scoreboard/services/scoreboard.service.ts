import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { map, tap } from 'rxjs/operators';

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
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(boardGames => {
                    return boardGames.map(boardGame => {
                        boardGame.games = boardGame.games.filter(g => !!g);
                        return boardGame;
                    });
                }),
                tap(boardGames => this.store.dispatch(new UpdateBoardGames(boardGames)))
            )
            .subscribe();
    }

    // ** PLAYERS **

    public getAllPlayers(): void {
        this.firebase.list<Player>(this.playersPath)
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(players => {
                    return players.map(player => {
                        player.games = player.games.filter(g => !!g);
                        return player;
                    });
                }),
                tap(players => this.store.dispatch(new UpdatePlayers(players)))
            )
            .subscribe();
    }

    // ** GAMES **

    public getAllGames(): void {
        this.firebase.list<Game>(this.gamesPath)
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(games => {
                    return games.map(game => {
                        game.players = game.players.filter(p => !!p);
                        return game;
                    });
                }),
                tap(games => this.store.dispatch(new UpdateGames(games)))
            )
            .subscribe();
    }
}
