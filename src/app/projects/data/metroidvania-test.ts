import { IProject } from 'src/app/models/project';
import { Tags } from 'src/app/models/tags';

export const metroidvaniaTest: IProject = {
    title: 'MetroidVania Test',
    description: 'A project built to test 2D platforming controls, metroidvania style camera and other ideas',
    youtubeId: 'GEBBXLS0sHg',
    imageUrl: 'assets/images/metroidvania-test.png',
    // tslint:disable-next-line:no-bitwise
    tags: Tags.CSharp | Tags.Unity
};
