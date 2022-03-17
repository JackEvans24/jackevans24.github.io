import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';

export interface ScoreboardStateModel {
    boardGamesMap: Record<string, BoardGame>;
    playersMap: Record<string, Player>;
    gamesMap: Record<string, Game>;
}
