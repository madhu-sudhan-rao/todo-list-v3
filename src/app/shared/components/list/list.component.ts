import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() options!: any[];
  @Output() onListItemClicked = new EventEmitter<any>()


  listItemClick(option: any) {
    this.onListItemClicked.emit(option);
  }

}
