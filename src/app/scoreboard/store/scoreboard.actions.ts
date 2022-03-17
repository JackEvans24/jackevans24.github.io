import { AddGameRequest } from '../models/add-game-request';
import { BoardGame } from '../models/board-game';
import { Game } from '../models/scoreboard-game';
import { Player } from '../models/scoreboard-player';

export class RefreshScoreboardData {
    static readonly type = '[Scoreboard] Refresh Data';
    constructor(public force: boolean = false) {}
}

export class RefreshGames {
    static readonly type = '[Scoreboard] Refresh Data';
    constructor(public force: boolean = false) {}
}

export class UpdateBoardGames {
    static readonly type = '[Scoreboard] Update Board Games';
    constructor(public boardGamesMap: Record<string, BoardGame>) {}
}

export class UpdatePlayers {
    static readonly type = '[Scoreboard] Update Players';
    constructor(public playersMap: Record<string, Player>) {}
}

export class UpdateGames {
    static readonly type = '[Scoreboard] Update Games';
    constructor(public gamesMap: Record<string, Game>) {}
}

export class AddGame {
    static readonly type = '[Scoreboard] Add Game';
    constructor(public addGameRequest: AddGameRequest) {}
}
