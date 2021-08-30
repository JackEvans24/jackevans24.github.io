import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const randomTvShow: IProject = {
    title: 'Random TV Show',
    description: 'A WinForms application used to select videos at random',
    githubLink: 'https://github.com/JackEvans24/random-tv-show',
    imageUrl: 'assets/images/random-tv-show.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp & Tags.WinForms
};
