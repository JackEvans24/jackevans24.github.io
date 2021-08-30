import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const fileChange: IProject = {
    title: 'File Renaming Applet',
    description: 'A command line tool used to rename batches of files',
    githubLink: 'https://github.com/JackEvans24/filename-changer',
    imageUrl: 'assets/images/file-change.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp
};
