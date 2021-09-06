import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const lockScript: IProject = {
    title: 'Windows Lock Script',
    description: 'A Powershell script which locks a PC once a day at the same time',
    githubLink: 'https://github.com/JackEvans24/lock-windows-script',
    imageUrl: 'assets/images/windows-lock-script.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.Powershell
};
