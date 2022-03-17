import { BoardGame } from './board-game';
import { Game } from './scoreboard-game';

export interface AddGameRequest {
    game: Game;
    boardGame?: BoardGame;
}
