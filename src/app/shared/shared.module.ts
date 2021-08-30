import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { MaterialModule } from './material.module';
import { YoutubeModalComponent } from './youtube-modal/youtube-modal.component';



@NgModule({
  declarations: [
    ProjectPreviewComponent,
    YoutubeModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProjectPreviewComponent,
    YoutubeModalComponent,
    MaterialModule
  ],
  entryComponents: [
    YoutubeModalComponent
  ]
})
export class SharedModule { }
