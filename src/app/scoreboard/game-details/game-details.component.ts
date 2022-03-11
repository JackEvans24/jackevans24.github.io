import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';
import { ScoreboardService } from '../services/scoreboard.service';

@UntilDestroy()
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
    public boardGameMap: any = {};
    public playerMap: any = {};
    public game?: Game;
    public loading = true;
    private gameId = 0;

    constructor(private route: ActivatedRoute, private service: ScoreboardService) { }

    ngOnInit(): void {
        this.getBoardGames();

        this.route.params.pipe(untilDestroyed(this)).subscribe(params => {
            this.gameId = +params.id;
            this.updateGame();
        });
    }

    private getBoardGames(): void {
        this.service.getAllBoardGames().subscribe(boardGames => {
            this.boardGameMap = boardGames.reduce((acc: any, curr: BoardGame) => {
                acc[curr.id] = curr;
                return acc;
            }, {});
        });
    }

    private updateGame(): void {
        if (!this.gameId || isNaN(this.gameId) || this.gameId <= 0) {
            return;
        }

        this.loading = true;

        this.service.getGame(this.gameId)
            .subscribe((game: Game) => {
                this.game = game;
                this.updatePlayerMap();
                this.loading = false;
            });
    }

    private updatePlayerMap(): void {
        if (!this.game) {
            return;
        }

        this.service.getPlayersForGame(this.game).subscribe(players => {
            this.playerMap = players.reduce((acc: any, curr: Player) => {
                acc[curr.id] = curr;
                return acc;
            }, {});
        });
    }
}
