export interface Game {
    date: Date | string;
    gameId: string;
    players: Record<string, number>;
}
