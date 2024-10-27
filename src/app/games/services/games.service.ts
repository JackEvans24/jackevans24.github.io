import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IGame } from 'src/app/models/game';

import { fingerguns } from '../data/fingerguns';
import { diceScravenger } from '../data/dice-scravenger';
import { graveyardPrince } from '../data/graveyard-prince';
import { perfectPlunge } from '../data/perfect-plunge';
import { scuttlebugDerby } from '../data/scuttlebug-derby';
import { stopTheTribe } from '../data/stop-the-tribe';
import { theRinging } from '../data/the-ringing';
import { neonBounce } from '../data/neon-bounce';

const games: IGame[] = [
    perfectPlunge,
    theRinging,
    neonBounce,
    fingerguns,
    scuttlebugDerby,
    graveyardPrince,
    stopTheTribe,
    diceScravenger
];

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    public getApps(): Observable<IGame[]> {
        return of(games);
    }
}
