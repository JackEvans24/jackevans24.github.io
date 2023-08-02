import { Tags } from './tags';

export interface IProject {
    title: string;
    description: string;
    url?: string;
    imageUrl?: string;
    youtubeId?: string;
    githubLink?: string;
    component?: string;
    tags: Tags;
}
