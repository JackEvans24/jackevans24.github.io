import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'merch', component: MerchComponent },
    { path: 'games', component: GamesComponent },
    {
        path: 'scoreboard',
        component: ScoreboardComponent,
        loadChildren: () => import('./scoreboard/scoreboard.module').then(m => m.ScoreboardModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
