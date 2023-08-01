import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IProject } from 'src/app/models/project';

import { cubeGame } from '../data/cube-game';
import { diceSimulator } from '../data/dice-simulator';
import { dropball } from '../data/dropball';
import { fileChange } from '../data/file-change';
import { griddle } from '../data/griddle';
import { lockScript } from '../data/lock-script';
import { metroidvaniaTest } from '../data/metroidvania-test';
import { mobieBrawl } from '../data/mobie-brawl';
import { moodLamp } from '../data/mood-lamp';
import { pinkGuy } from '../data/pink-guy';
import { randomTvShow } from '../data/random-tv-show';
import { wordsFromTheWeb } from '../data/words-from-the-web';

const apps: IProject[] = [
    griddle,
    randomTvShow,
    dropball,
    fileChange,
    metroidvaniaTest,
    moodLamp,
    mobieBrawl,
    diceSimulator,
    wordsFromTheWeb,
    cubeGame,
    pinkGuy,
    lockScript,
];

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    public getApps(): Observable<IProject[]> {
        return of(apps);
    }
}
