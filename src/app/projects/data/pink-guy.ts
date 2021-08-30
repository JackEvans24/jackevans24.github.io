import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const pinkGuy: IProject = {
    title: 'Pink Guy AI',
    description: 'An unfinished project where AI characters can walk around their environment, eating the falling food to replenish their health',
    imageUrl: 'assets/images/pink-guy.png',
    youtubeId: 'ia_lZKDmtXg',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
