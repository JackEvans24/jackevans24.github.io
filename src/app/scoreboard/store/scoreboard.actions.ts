import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';

export class RefreshScoreboardData {
    static readonly type = '[Scoreboard] Refresh Data';
    constructor(public force: boolean) {}
}

export class UpdateBoardGames {
    static readonly type = '[Scoreboard] Update Board Games';
    constructor(public boardGames: BoardGame[]) {}
}

export class UpdatePlayers {
    static readonly type = '[Scoreboard] Update Players';
    constructor(public players: Player[]) {}
}

export class UpdateGames {
    static readonly type = '[Scoreboard] Update Games';
    constructor(public games: Game[]) {}
}
