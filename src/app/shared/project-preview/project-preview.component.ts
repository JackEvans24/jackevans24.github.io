import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IProject } from 'src/app/models/project';


@Component({
    selector: 'app-project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent {
    @Input()
    project!: IProject;

    constructor(private dialog: MatDialog) {}
}
