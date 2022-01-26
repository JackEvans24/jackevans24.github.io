import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IGame } from 'src/app/models/game';

import { fingerguns } from '../data/fingerguns';
import { graveyardPrince } from '../data/graveyard-prince';
import { scuttlebugDerby } from '../data/scuttlebug-derby';
import { stopTheTribe } from '../data/stop-the-tribe';

const games: IGame[] = [
    graveyardPrince,
    scuttlebugDerby,
    fingerguns,
    stopTheTribe
];

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    public getApps(): Observable<IGame[]> {
        return of(games);
    }
}
