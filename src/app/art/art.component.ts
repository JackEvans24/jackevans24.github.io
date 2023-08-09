import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShader, shaders } from './data/shaders';

@Component({
    selector: 'app-art',
    templateUrl: './art.component.html',
    styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
    public shaders = shaders;
    public currentShader?: IShader;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(params);
            this.currentShader = shaders.find(shader => shader.url === params.get('shaderType'));
        });
    }
}
