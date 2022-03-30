import { Identifyable } from './identifyable';

export interface Player {
    name: string;
    dateCreated: Date;
    games: Record<string, boolean>;
}

export interface PlayerScore {
    name: string;
    score: number;
}

export interface PlayerWithKey extends Player, Identifyable {}

export const newPlayerKey = '#newPlayer';
