import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spotify-code',
  templateUrl: './spotify-code.component.html',
  styleUrls: ['./spotify-code.component.scss']
})
export class SpotifyCodeComponent implements OnInit {
  public code = '';
  public codeCopied = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.code = params.get('code') || '';
    });
  }

  copyInputMessage(): void {
    this.codeCopied = true;
    navigator.clipboard.writeText(this.code);

    setTimeout(() => {
      this.codeCopied = false;
    }, 2000);
  }
}
