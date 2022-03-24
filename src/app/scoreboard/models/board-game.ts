import { Identifyable } from './identifyable';

export interface BoardGame {
    name: string;
    games: Record<string, boolean>;
}

export interface BoardGameWithKey extends BoardGame, Identifyable {}
