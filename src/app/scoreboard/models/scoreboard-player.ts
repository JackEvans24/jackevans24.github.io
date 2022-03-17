export interface Player {
    name: string;
    dateCreated: Date;
    games: Record<string, boolean>;
}
