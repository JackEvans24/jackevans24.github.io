import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {
    public value = '';

    constructor(private dialogRef: MatDialogRef<PromptComponent>) { }

    close(): void {
        this.dialogRef.close();
    }

    confirm(): void {
        this.dialogRef.close(this.value);
    }
}
