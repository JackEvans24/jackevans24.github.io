import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IProject } from 'src/app/models/project';

import { cubeGame } from '../data/cube-game';
import { diceSimulator } from '../data/dice-simulator';
import { dropball } from '../data/dropball';
import { fileChange } from '../data/file-change';
import { mobieBrawl } from '../data/mobie-brawl';
import { randomTvShow } from '../data/random-tv-show';

const apps: IProject[] = [ fileChange, randomTvShow, dropball, mobieBrawl, cubeGame, diceSimulator ];

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    public getApps(): Observable<IProject[]> {
        return of(apps);
    }
}
