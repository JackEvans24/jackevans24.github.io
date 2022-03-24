import { BoardGame } from './board-game';
import { Game } from './scoreboard-game';
import { Player } from './scoreboard-player';

export interface AddGameRequest {
    game: Game;
    boardGame?: BoardGame;
    players: Record<string, Player>;
}
