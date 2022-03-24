import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { RefreshScoreboardData } from '../store/scoreboard.actions';
import { ScoreboardState } from '../store/scoreboard.state';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.scss']
})
@UntilDestroy()
export class BoardGamesComponent implements OnInit {
    public gamesMap: Record<string, Game> = {};
    public boardGameMap: Record<string, BoardGame> = {};

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.getStoreData();
    }

    private getStoreData(): void {
        this.store
            .select(ScoreboardState.boardGamesMap)
            .pipe(untilDestroyed(this))
            .subscribe(map => this.boardGameMap = map);

        this.store
            .select(ScoreboardState.gamesMap)
            .pipe(untilDestroyed(this))
            .subscribe(gamesMap => this.gamesMap = gamesMap);

        this.store.dispatch(new RefreshScoreboardData());
    }
}
