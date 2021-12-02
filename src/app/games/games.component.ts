import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { IGame } from '../models/game';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {
    public compactView = false;

    games: IGame[] = [];

    constructor(private service: GamesService, private sanitiser: DomSanitizer) {
        this.setCompactView();
    }

    ngOnInit(): void {
      this.service.getApps().subscribe(games => this.games = games);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.setCompactView();
    }

    private setCompactView(): void {
        this.compactView = window.innerWidth < 601;
    }

    getSafeEmbedUrl(game: IGame): SafeUrl {
        return this.sanitiser.bypassSecurityTrustResourceUrl('https://itch.io/embed/' + game.embedId);
    }

    getSafeGameUrl(game: IGame): SafeUrl {
        return this.sanitiser.bypassSecurityTrustResourceUrl('https://jevansmassive.itch.io/' + game.url);
    }
}
