import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AddBoardGameComponentData } from './add-board-game.data';

@Component({
    selector: 'app-add-board-game',
    templateUrl: './add-board-game.component.html',
    styleUrls: ['./add-board-game.component.scss']
})
export class AddBoardGameComponent {
    public value = '';
    public error = '';

    constructor(private dialogRef: MatDialogRef<AddBoardGameComponent>, @Inject(MAT_DIALOG_DATA) public data: AddBoardGameComponentData) { }

    close(): void {
        this.dialogRef.close();
    }

    confirm(): void {
        this.error = '';

        const nameToCompare = this.value.trim().toLowerCase();
        if (nameToCompare.length < 1) {
            this.error = 'Enter a name';
            return;
        }

        if ((this.data.boardGameNames || []).some(name => name.trim().toLowerCase() === nameToCompare)) {
            this.error = 'A board game with this name already exists';
            return;
        }

        this.dialogRef.close(this.value);
    }
}
