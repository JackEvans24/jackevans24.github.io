import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { YoutubeModalData } from './youtube-modal.data';

@Component({
  selector: 'app-youtube-modal',
  templateUrl: './youtube-modal.component.html',
  styleUrls: ['./youtube-modal.component.scss']
})
export class YoutubeModalComponent {
    get youtubeUrl(): SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.data.youtubeEmbedId);
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: YoutubeModalData,
        private dialog: MatDialogRef<YoutubeModalComponent>,
        private sanitizer: DomSanitizer
    ) { }

    close(): void {
        this.dialog.close();
    }
}
