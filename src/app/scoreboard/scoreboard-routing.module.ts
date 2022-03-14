import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BoardGamesComponent } from './board-games/board-games.component';

import { PlayersComponent } from './players/players.component';

const routes: Route[] = [
    {
        path: 'games',
        component: BoardGamesComponent
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
