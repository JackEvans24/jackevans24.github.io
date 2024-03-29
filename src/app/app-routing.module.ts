import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtComponent } from './art/art.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'merch', component: MerchComponent },
    { path: 'games', component: GamesComponent },
    { path: 'art', redirectTo: 'art/none' },
    {
        path: 'art/:shaderType',
        component: ArtComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
