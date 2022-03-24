import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { newPlayerKey } from '../../models/scoreboard-player';

import { AddPlayerComponentData } from './add-player.data';

@Component({
    selector: 'app-add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
    public value = '';
    public error = '';

    constructor(private dialogRef: MatDialogRef<AddPlayerComponent>, @Inject(MAT_DIALOG_DATA) public data: AddPlayerComponentData) { }

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

        if (nameToCompare.indexOf(newPlayerKey) === 0) {
            this.error = 'Name must not start with "#"';
            return;
        }

        if ((this.data.playerNames || []).some(name => name.trim().toLowerCase() === nameToCompare)) {
            this.error = 'A player with this name already exists';
            return;
        }

        this.dialogRef.close(this.value);
    }
}
