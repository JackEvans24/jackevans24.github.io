import { Identifyable } from './identifyable';

export interface Game {
    date: Date | string;
    gameId: string;
    players: Record<string, number>;
}

export interface GameWithKey extends Game, Identifyable {}
