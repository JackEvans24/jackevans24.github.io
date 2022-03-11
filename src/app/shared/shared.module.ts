import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';



@NgModule({
  declarations: [
    ProjectPreviewComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule
  ],
  exports: [
    ProjectPreviewComponent,
    FirebaseModule,
    MaterialModule
  ]
})
export class SharedModule { }
