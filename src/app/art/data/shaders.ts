export interface IShader {
    name: string;
    url: string;
    embedUrl: string;
}

export const shaders: IShader[] = [
    { name: 'Cellular Noise', url: 'cellular-noise', embedUrl: 'Dt2yWz' },
    { name: 'Lava lamp', url: 'lava-lamp', embedUrl: 'cl2cRK' },
    { name: 'Vignette', url: 'vignette', embedUrl: 'cljcRK' },
    { name: 'Voronoi', url: 'voronoi', embedUrl: 'cl2yRK' },
];
