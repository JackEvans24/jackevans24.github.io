import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html'
})
export class MerchComponent implements OnInit {
    rows = 2;
    columns = 2;

    totalImages = 1;

    get safeRbUrl(): SafeUrl {
        return this.sanitiser.bypassSecurityTrustResourceUrl(`https://www.redbubble.com/people/jevansmassive/external-portfolio?count=${this.totalImages}`);
    }

    constructor(private sanitiser: DomSanitizer) { }

    ngOnInit(): void {
        this.setColumnsAndRows(window.innerWidth);
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.setColumnsAndRows(window.innerWidth);
    }

    private setColumnsAndRows(width: number): void {
        this.columns = Math.min(Math.floor((width - 26) / 240), this.totalImages);
        this.rows = Math.ceil(this.totalImages / this.columns);
    }
}
