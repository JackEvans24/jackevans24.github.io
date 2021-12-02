import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GamesComponent } from './games.component';

@NgModule({
    declarations: [
        GamesComponent
    ],
    imports: [ CommonModule, SharedModule ]
})
export class GamesModule {}
