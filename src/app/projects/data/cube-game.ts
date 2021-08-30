import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const cubeGame: IProject = {
    title: 'Cube Game',
    description: 'A runner game where the player controls a cube through sets of obstacles',
    githubLink: 'https://github.com/JackEvans24/CubeGame',
    imageUrl: 'assets/images/cube-game.png',
    youtubeId: 'o6cHEGJBa4g',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
