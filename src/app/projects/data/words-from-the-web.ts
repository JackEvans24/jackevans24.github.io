import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const wordsFromTheWeb: IProject = {
    title: 'Words from the Web',
    description: 'A WinForms application which uses Selenium to select words from random Google searches',
    githubLink: 'https://github.com/JackEvans24/words-from-the-world-wide-web',
    imageUrl: 'assets/images/words-from-the-web.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.WinForms
};
