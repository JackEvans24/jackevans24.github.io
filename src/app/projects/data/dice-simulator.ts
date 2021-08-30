import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const diceSimulator: IProject = {
    title: 'Dice Simulator',
    description: 'A tool to digitally simulate dice throws. Includes 6 different variations of dice I 3D modelled in Blender',
    githubLink: 'https://github.com/JackEvans24/DiceSimulator',
    imageUrl: 'assets/images/dice-simulator.png',
    youtubeId: 'L5Eao4wR5Ak',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
