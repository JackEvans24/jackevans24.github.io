import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const outOfTen: IProject = {
    title: 'Out of 10',
    description: 'A pass-and-play mobile game based on the popular board game Wavelength',
    githubLink: 'https://github.com/JackEvans24/one-to-ten',
    imageUrl: 'assets/images/out-of-ten.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
