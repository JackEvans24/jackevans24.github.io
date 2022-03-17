import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { BoardGamesComponent } from './board-games/board-games.component';

import { PlayersComponent } from './players/players.component';

const routes: Route[] = [
    {
        path: 'games',
        component: BoardGamesComponent
    },
    {
        path: 'games/:id',
        component: AddGameComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: '**',
        redirectTo: 'games'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ScoreboardRoutingModule {}
