export interface IShader {
    name: string;
    url: string;
    code: string;
}

export const shaders: IShader[] = [
    { name: 'Cellular Noise', url: 'cellular-noise', code: '<div>Hello world</div>' }
];
