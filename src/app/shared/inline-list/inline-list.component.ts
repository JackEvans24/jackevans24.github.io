import { Component, Input } from '@angular/core';
import { IListItem } from './inline-list-item';

@Component({
  selector: 'app-inline-list',
  templateUrl: './inline-list.component.html',
  styleUrls: ['./inline-list.component.scss']
})
export class InlineListComponent {
  @Input() header = 'Title';
  @Input() listItems: IListItem[] = [];

  constructor() { }
}
