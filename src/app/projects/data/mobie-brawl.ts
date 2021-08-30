import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const mobieBrawl: IProject = {
    title: 'Mobie Brawl',
    description: 'An endless brawler where the player fights off increasing numbers of enemies',
    githubLink: 'https://github.com/JackEvans24/MobieBrawl',
    imageUrl: 'assets/images/mobie-brawl.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
