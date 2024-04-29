import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const proceduralSound: IProject = {
    title: 'Procedural Sound',
    description: 'An exploration into generating tones, and the maths behind pitch',
    githubLink: 'https://github.com/JackEvans24/procedural-sound',
    imageUrl: 'assets/images/procedural-sound.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
