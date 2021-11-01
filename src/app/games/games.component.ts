import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
    public compactView = false;

    constructor() {
        this.setCompactView();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.setCompactView();
    }

    private setCompactView(): void {
        this.compactView = window.innerWidth < 601;
    }
}
