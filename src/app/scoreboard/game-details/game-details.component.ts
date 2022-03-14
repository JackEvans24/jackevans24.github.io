import { Component, Input, OnInit } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Game } from '../models/scoreboard-game';

@UntilDestroy()
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
    @Input() public game?: Game;
    public expanded = false;

    constructor() { }

    ngOnInit(): void {}

    public toggleExpand(): void {
        this.expanded = !this.expanded;
    }
}
