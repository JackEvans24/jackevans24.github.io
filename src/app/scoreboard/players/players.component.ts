import { Component, OnInit } from '@angular/core';

import { Player } from '../models/scoreboard-player';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
    public players: Player[] = [];
    public lastGameMap: any = {};

    constructor(private service: ScoreboardService) {}

    ngOnInit(): void {
        this.getPlayers();
    }

    public async getPlayers(): Promise<void> {
        // this.service.getAllPlayers()
        //     .subscribe(players => this.players = players);
    }

    observeOnDestroy(): void {}
}
