import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline-list',
  templateUrl: './inline-list.component.html',
  styleUrls: ['./inline-list.component.scss']
})
export class InlineListComponent {
  @Input() header = 'Title';
  @Input() listItems: string[] = [];

  constructor() { }
}
