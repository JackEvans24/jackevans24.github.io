import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [],
})
export class MaterialModule { }
