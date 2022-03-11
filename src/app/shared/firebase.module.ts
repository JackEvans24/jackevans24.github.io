import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase, 'jevans-scoreboard'),
        AngularFireDatabaseModule,
    ],
    exports: [
        AngularFireModule,
        AngularFireDatabaseModule,
    ],
    declarations: [],
})
export class FirebaseModule { }
