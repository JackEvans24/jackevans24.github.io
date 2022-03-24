import { Identifyable } from './identifyable';

export interface Player {
    name: string;
    dateCreated: Date;
    games: Record<string, boolean>;
}

export interface PlayerWithKey extends Player, Identifyable {}

export const newPlayerKey = '#newPlayer';
