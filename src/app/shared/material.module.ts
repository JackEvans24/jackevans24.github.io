import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule
      ],
      exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule
      ],
      declarations: [],
})
export class MaterialModule { }
