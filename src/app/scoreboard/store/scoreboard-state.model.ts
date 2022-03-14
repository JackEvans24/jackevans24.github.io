import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';

export interface ScoreboardStateModel {
    boardGamesMap: Record<number, BoardGame>;
    playersMap: Record<number, Player>;
    gamesMap: Record<number, Game>;
}
