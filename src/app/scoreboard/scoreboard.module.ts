import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoardGamesComponent } from './board-games/board-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { PlayersComponent } from './players/players.component';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
    declarations: [
        ScoreboardComponent,
        PlayersComponent,
        BoardGamesComponent,
        GameDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

        ScoreboardRoutingModule
    ]
})
export class ScoreboardModule {}
