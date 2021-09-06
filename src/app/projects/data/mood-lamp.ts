import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const moodLamp: IProject = {
    title: 'Virtual Mood Lamp',
    description: 'An Electron application which fills the window with slowly-changing random colours',
    githubLink: 'https://github.com/JackEvans24/virtual-mood-lamp',
    imageUrl: 'assets/images/mood-lamp.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.Javascript
};
