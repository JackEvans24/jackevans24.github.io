import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShader, shaders } from './data/shaders';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const SHADER_URL_ROOT = 'https://www.shadertoy.com/embed/';
const SHADER_URL_PARAMS = '?gui=false&paused=false&muted=false';

@Component({
    selector: 'app-art',
    templateUrl: './art.component.html',
    styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
    public shaders = shaders;
    public currentShaderUrl: SafeUrl | null = null;

    constructor(private route: ActivatedRoute, private sanitiser: DomSanitizer) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const currentShader = shaders.find(shader => shader.url === params.get('shaderType'));
            this.currentShaderUrl = !!currentShader ? this.getSafeEmbedUrl(currentShader) : null;
        });
    }

    public getSafeEmbedUrl(shader: IShader): SafeUrl {
        const url = SHADER_URL_ROOT + shader.embedUrl + SHADER_URL_PARAMS;
        return this.sanitiser.bypassSecurityTrustResourceUrl(url);
    }
}
