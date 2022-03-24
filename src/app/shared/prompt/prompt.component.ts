import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PromptComponentData } from './prompt.data';

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {
    public value = '';

    constructor(private dialogRef: MatDialogRef<PromptComponent>, @Inject(MAT_DIALOG_DATA) public data: PromptComponentData) { }

    close(): void {
        this.dialogRef.close();
    }

    confirm(): void {
        this.dialogRef.close(this.value);
    }
}
