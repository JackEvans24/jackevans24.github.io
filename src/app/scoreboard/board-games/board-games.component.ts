import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GameWithKey } from '../models/scoreboard-game';
import { RefreshScoreboardData } from '../store/scoreboard.actions';
import { ScoreboardState } from '../store/scoreboard.state';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.scss']
})
@UntilDestroy()
export class BoardGamesComponent implements OnInit {
    public games: GameWithKey[] = [];

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.getStoreData();
    }

    private getStoreData(): void {
        this.store
            .select(ScoreboardState.gamesArray)
            .pipe(untilDestroyed(this))
            .subscribe(games => this.games = games.sort((a, b) => a.date > b.date ? -1 : 1));

        this.store.dispatch(new RefreshScoreboardData());
    }
}
