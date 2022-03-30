import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { BoardGame, BoardGameWithKey } from '../models/board-game';
import { Identifyable } from '../models/identifyable';
import { Game, GameWithKey } from '../models/scoreboard-game';
import { Player, PlayerWithKey } from '../models/scoreboard-player';
import { ScoreboardService } from '../services/scoreboard.service';
import { ScoreboardStateModel } from './scoreboard-state.model';
import { AddGame, RefreshGames, RefreshScoreboardData, UpdateBoardGames, UpdateGames, UpdatePlayers } from './scoreboard.actions';

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
    static boardGamesMap(state: ScoreboardStateModel): Record<string, BoardGame> {
        return state.boardGamesMap;
    }

    @Selector()
    static boardGamesArray(state: ScoreboardStateModel): BoardGameWithKey[] {
        return ScoreboardState.mapToIdentifyableArray(state.boardGamesMap);
    }

    @Selector()
    static playersMap(state: ScoreboardStateModel): Record<string, Player> {
        return state.playersMap;
    }

    @Selector()
    static playersArray(state: ScoreboardStateModel): PlayerWithKey[] {
        return ScoreboardState.mapToIdentifyableArray(state.playersMap);
    }

    @Selector()
    static gamesMap(state: ScoreboardStateModel): Record<string, Game> {
        return state.gamesMap;
    }

    @Selector()
    static gamesArray(state: ScoreboardStateModel): GameWithKey[] {
        return ScoreboardState.mapToIdentifyableArray(state.gamesMap);
    }

    private static mapToIdentifyableArray<T, U extends T & Identifyable>(map: Record<string, T>): U[] {
        return Object.keys(map)
            .map(key => {
                const mapItem = map[key];
                const item = { key, ...mapItem };
                return item as U;
            });
    }

    constructor(private service: ScoreboardService) {}

    @Action(RefreshScoreboardData)
    refreshData(ctx: StateContext<ScoreboardStateModel>, { force }: RefreshScoreboardData): void {
        const state = ctx.getState();

        if (force || (Object.keys(state.boardGamesMap) || []).length === 0) {
            this.service.getAllBoardGames();
        }
        if (force || (Object.keys(state.playersMap) || []).length === 0) {
            this.service.getAllPlayers();
        }

        this.refreshGames(ctx, { force });
    }

    @Action(RefreshGames)
    refreshGames(ctx: StateContext<ScoreboardStateModel>, { force }: RefreshGames): void {
        const state = ctx.getState();

        if (force || (Object.keys(state.gamesMap) || []).length === 0) {
            this.service.getAllGames();
        }
    }

    @Action(UpdateBoardGames)
    updateBoardGames(ctx: StateContext<ScoreboardStateModel>, { boardGamesMap }: UpdateBoardGames): void {
        ctx.patchState({
            boardGamesMap
        });
    }

    @Action(UpdatePlayers)
    updatePlayers(ctx: StateContext<ScoreboardStateModel>, { playersMap }: UpdatePlayers): void {
        ctx.patchState({
            playersMap
        });
    }

    @Action(UpdateGames)
    updateGames(ctx: StateContext<ScoreboardStateModel>, { gamesMap }: UpdateGames): void {
        ctx.patchState({
            gamesMap
        });
    }

    @Action(AddGame)
    addGame(ctx: StateContext<ScoreboardStateModel>, { addGameRequest }: AddGame): void {
        this.service.addGame(addGameRequest).then(() => this.refreshData(ctx, { force: true }));
    }
}
