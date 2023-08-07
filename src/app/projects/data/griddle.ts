import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const griddle: IProject = {
    title: 'Griddle',
    description: 'A browser game combining elements of Wordle and Bananagrams',
    url: 'https://griddle.jevans.uk',
    imageUrl: 'assets/images/griddle.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.Javascript | Tags.Firebase
};
