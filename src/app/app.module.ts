import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { ProjectsModule } from './projects/projects.module';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { ScoreboardState } from './scoreboard/store/scoreboard.state';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxsModule.forRoot([ScoreboardState]),

    AngularFireModule.initializeApp(environment.firebase, 'scoreboard'),
    AngularFireDatabaseModule,

    SharedModule,

    GamesModule,
    ProjectsModule,
    ScoreboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
