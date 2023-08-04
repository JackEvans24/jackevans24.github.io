import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineListComponent } from './inline-list/inline-list.component';
import { MaterialModule } from './material.module';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';

@NgModule({
  declarations: [
    InlineListComponent,
    ProjectPreviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    InlineListComponent,
    ProjectPreviewComponent,
    MaterialModule
  ]
})
export class SharedModule { }
