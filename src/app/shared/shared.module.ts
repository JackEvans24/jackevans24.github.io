import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FirebaseModule } from './firebase.module';
import { MaterialModule } from './material.module';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { PromptComponent } from './prompt/prompt.component';

@NgModule({
  declarations: [
    ProjectPreviewComponent,
    PromptComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectPreviewComponent,
    FirebaseModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
