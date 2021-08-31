import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    ProjectPreviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProjectPreviewComponent,
    MaterialModule
  ]
})
export class SharedModule { }
