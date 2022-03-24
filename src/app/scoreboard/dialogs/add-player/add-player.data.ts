import { PromptComponentData } from 'src/app/shared/prompt/prompt.data';

export interface AddPlayerComponentData extends PromptComponentData {
    playerNames: string[];
}
