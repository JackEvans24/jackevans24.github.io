import { Score } from './scoreboard-score';

export interface Game {
    id: number;
    date: Date;
    gameId: number;
    players: Score[];
}
