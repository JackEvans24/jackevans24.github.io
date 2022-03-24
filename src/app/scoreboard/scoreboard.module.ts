import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AddGameComponent } from './add-game/add-game.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { AddBoardGameComponent } from './dialogs/add-board-game/add-board-game.component';
import { AddPlayerComponent } from './dialogs/add-player/add-player.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { PlayersComponent } from './players/players.component';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
    declarations: [
        ScoreboardComponent,
        PlayersComponent,
        BoardGamesComponent,
        GameDetailsComponent,
        AddGameComponent,
        AddBoardGameComponent,
        AddPlayerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

        ScoreboardRoutingModule
    ]
})
export class ScoreboardModule {}
