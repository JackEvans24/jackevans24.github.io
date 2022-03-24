import { PromptComponentData } from 'src/app/shared/prompt/prompt.data';

export interface AddBoardGameComponentData extends PromptComponentData {
    boardGameNames: string[];
}
