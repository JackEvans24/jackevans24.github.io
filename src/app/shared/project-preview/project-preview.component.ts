import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IProject } from 'src/app/models/project';

import { YoutubeModalComponent } from '../youtube-modal/youtube-modal.component';
import { YoutubeModalData } from '../youtube-modal/youtube-modal.data';

@Component({
    selector: 'app-project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent {
    @Input()
    project!: IProject;

    constructor(private dialog: MatDialog) {}

    openProjectVideo(): void {
        if (!this.project.youtubeId) {
        return;
        }

        const data: YoutubeModalData = { youtubeEmbedId: this.project.youtubeId };
        this.dialog.open(YoutubeModalComponent, { minWidth: '50vws', data });
    }
}
