import { Component, OnInit } from '@angular/core';
import { BoardGame } from '../models/board-game';

import { Game } from '../models/scoreboard-game';
import { ScoreboardService } from '../services/scoreboard.service';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.scss']
})
export class BoardGamesComponent implements OnInit {
    public games: Game[] = [];
    public boardGameMap: any = {};

    constructor(private service: ScoreboardService) { }

    ngOnInit(): void {
        this.subscribeToData();
    }

    private subscribeToData(): void {
        this.service.getAllGames().subscribe(games => this.games = games);
        this.service.getAllBoardGames().subscribe(boardGames => {
            this.boardGameMap = boardGames.reduce((acc: any, curr: BoardGame) => {
                acc[curr.id] = curr;
                return acc;
            }, {});
        });
    }
}
