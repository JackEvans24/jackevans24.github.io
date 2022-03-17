import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectPreviewComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectPreviewComponent,
    FirebaseModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
