import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Player } from '../models/scoreboard-player';
import { RefreshScoreboardData } from '../store/scoreboard.actions';
import { ScoreboardState } from '../store/scoreboard.state';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
@UntilDestroy()
export class PlayersComponent implements OnInit {
    public players: Player[] = [];
    public lastGameMap: any = {};

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.getStoreData();
    }

    public async getStoreData(): Promise<void> {
        // TODO: Fix
        // this.store.select(ScoreboardState.players)
        //     .pipe(untilDestroyed(this))
        //     .subscribe(players => this.players = players);

        // this.store.dispatch(new RefreshScoreboardData());
    }

    observeOnDestroy(): void {}
}
