import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { ArtComponent } from './art/art.component';
import { SpotifyCodeComponent } from './app/spotify-code/spotify-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MerchComponent,
    ArtComponent,
    SpotifyCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    GamesModule,
    ProjectsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
