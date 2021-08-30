import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const dropball: IProject = {
    title: 'DropBall',
    description: 'A gameshow-style prop made in Unity used to aide quizzes during COVID-19 lockdown',
    githubLink: 'https://github.com/JackEvans24/DropBall',
    imageUrl: 'assets/images/dropball.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
