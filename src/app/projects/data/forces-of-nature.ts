import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const forcesOfNature: IProject = {
    title: 'Forces of Nature',
    description: 'A match-three mobile board game for two players',
    githubLink: 'https://github.com/JackEvans24/match-up',
    imageUrl: 'assets/images/forces-of-nature.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
