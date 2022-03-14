import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';
import { ScoreboardService } from '../services/scoreboard.service';
import { ScoreboardStateModel } from './scoreboard-state.model';
import { RefreshScoreboardData, UpdateBoardGames, UpdateGames, UpdatePlayers } from './scoreboard.actions';

@State<ScoreboardStateModel>({
    name: 'scoreboard',
    defaults: {
        boardGamesMap: {},
        playersMap: {},
        gamesMap: {}
    }
})
@Injectable()
export class ScoreboardState {
    @Selector()
    static boardGamesMap(state: ScoreboardStateModel): any {
        return state.boardGamesMap;
    }

    @Selector()
    static playersMap(state: ScoreboardStateModel): any {
        return state.playersMap;
    }

    @Selector()
    static gamesMap(state: ScoreboardStateModel): any {
        return state.gamesMap;
    }

    constructor(private service: ScoreboardService) {}

    @Action(RefreshScoreboardData)
    refreshData(ctx: StateContext<ScoreboardStateModel>, action: RefreshScoreboardData): void {
        const state = ctx.getState();

        if (action.force || (Object.keys(state.boardGamesMap) || []).length === 0) {
            this.service.getAllBoardGames();
        }
        if (action.force || (Object.keys(state.playersMap) || []).length === 0) {
            this.service.getAllPlayers();
        }
        if (action.force || (Object.keys(state.gamesMap) || []).length === 0) {
            this.service.getAllGames();
        }
    }

    @Action(UpdateBoardGames)
    updateBoardGames(ctx: StateContext<ScoreboardStateModel>, action: UpdateBoardGames): void {
        const boardGamesMap = action.boardGames.reduce((acc: any, curr: BoardGame) => {
            acc[curr.id] = curr;
            return acc;
        }, {});

        ctx.patchState({
            boardGamesMap
        });
    }

    @Action(UpdatePlayers)
    updatePlayers(ctx: StateContext<ScoreboardStateModel>, action: UpdatePlayers): void {
        const playersMap = action.players.reduce((acc: any, curr: Player) => {
            acc[curr.id] = curr;
            return acc;
        }, {});

        ctx.patchState({
            playersMap
        });
    }

    @Action(UpdateGames)
    updateGames(ctx: StateContext<ScoreboardStateModel>, action: UpdateGames): void {
        const gamesMap = action.games.reduce((acc: any, curr: Game) => {
            acc[curr.id] = curr;
            return acc;
        }, {});

        ctx.patchState({
            gamesMap
        });
    }
}
