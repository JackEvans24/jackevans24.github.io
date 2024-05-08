import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const photobook: IProject = {
    title: 'Photobook',
    description: 'A Unity project designed to show off photos and videos from my travels',
    imageUrl: 'assets/images/photobook.png',
    youtubeId: 'RIB8KCMaQSw',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
