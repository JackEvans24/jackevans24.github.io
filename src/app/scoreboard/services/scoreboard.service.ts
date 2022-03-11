import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';

@UntilDestroy()
@Injectable({
    providedIn: 'root'
})
export class ScoreboardService {
    protected boardGameList: AngularFireList<BoardGame>;

    protected boardGamesPath = '/board-games';
    protected gamesPath = '/games';
    protected playersPath = '/players';

    constructor(protected firebase: AngularFireDatabase) {
        this.boardGameList = this.firebase.list(this.boardGamesPath);
    }

    // ** BOARD GAMES **

    public getAllBoardGames(): Observable<BoardGame[]> {
        return this.boardGameList
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(boardGames => {
                    return boardGames.map(boardGame => {
                        boardGame.games = boardGame.games.filter(g => !!g);
                        return boardGame;
                    });
                })
            );
    }

    // ** PLAYERS **

    private getPlayers(query?: QueryFn): Observable<Player[]> {
        return this.firebase.list<Player>(this.playersPath, query)
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(players => {
                    return players.map(player => {
                        player.games = player.games.filter(g => !!g);
                        return player;
                    });
                })
            );
    }

    public getAllPlayers(): Observable<Player[]> {
        return this.getPlayers();
    }

    public getPlayersForGame(game: Game): Observable<Player[]> {
        return this.getPlayers()
            .pipe(
                map((players: Player[]) => {
                return players.filter(player => game.players.some(p => p.id === player.id));
            }));
}

    // ** GAMES **

    private getGames(query?: QueryFn): Observable<Game[]> {
        return this.firebase.list<Game>(this.gamesPath, query)
            .valueChanges()
            .pipe(
                untilDestroyed(this),
                map(games => {
                    return games.map(game => {
                        game.players = game.players.filter(p => !!p);
                        return game;
                    });
                })
            );
    }

    public getAllGames(): Observable<Game[]> {
        return this.getGames();
    }

    public getGame(id: number): Observable<Game> {
        return this.getGames(ref => ref.orderByChild('id').equalTo(id))
            .pipe(map(games => games[0]));
    }

    public getGamesFor(player: Player): Observable<Game[]> {
        return this.getGames()
            .pipe(
                map((games: Game[]) => {
                return games.filter(game => Object.keys(player.games).some(key => key === game.id.toString()));
            }));
    }
}
