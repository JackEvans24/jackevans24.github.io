import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player, PlayerScore } from '../models/scoreboard-player';
import { ScoreboardState } from '../store/scoreboard.state';

@Component({
    selector: 'app-game-details',
    templateUrl: './game-details.component.html',
    styleUrls: ['./game-details.component.scss']
})
@UntilDestroy()
export class GameDetailsComponent implements OnInit {
    @Input() public key!: string;
    @Input() public game!: Game;

    public gamePlayers: PlayerScore[] = [];

    public boardGamesMap: Record<string, BoardGame> = {};
    public playersMap: Record<string, Player> = {};
    public expanded = false;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.getStoreData();
    }

    private getStoreData(): void {
        this.store
            .select(ScoreboardState.playersMap)
            .pipe(untilDestroyed(this))
            .subscribe(map => {
                this.playersMap = map;
                this.updateGame();
            });

        this.store
            .select(ScoreboardState.boardGamesMap)
            .pipe(untilDestroyed(this))
            .subscribe(map => this.boardGamesMap = map);
    }

    private updateGame(): void {
        this.gamePlayers = Object.keys(this.game.players)
            .map<PlayerScore>(playerKey => {
                return {
                    name: this.playersMap[playerKey]?.name,
                    score: this.game.players[playerKey]
                };
            })
            .sort((a, b) => b.score - a.score);
    }

    public toggleExpand(): void {
        this.expanded = !this.expanded;
    }
}
