import { IListItem } from '../shared/inline-list/inline-list-item';
import { Tags } from './tags';

export interface IProject {
    title: string;
    description: string;
    url?: string;
    imageUrl?: string;
    youtubeId?: string;
    githubLink?: string;
    tags: Tags;
}

export function getTagList(tags: Tags): IListItem[] {
    return Object.values(Tags)
        // tslint:disable-next-line:no-bitwise
        .filter(tag => (tags & Number(tag)) !== 0)
        .map(tag => ({ text: Tags[+tag].replace('CSharp', 'C#') }));
}
