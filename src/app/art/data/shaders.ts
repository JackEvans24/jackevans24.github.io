export interface IShader {
    name: string;
    url: string;
    embedUrl: string;
}

export const shaders: IShader[] = [
    { name: 'Cellular Noise', url: 'cellular-noise', embedUrl: 'Dt2yWz' },
    { name: 'Voronoi', url: 'voronoi', embedUrl: 'cl2yRK' },
    { name: 'Vignette', url: 'vignette', embedUrl: 'cljcRK' },
];
