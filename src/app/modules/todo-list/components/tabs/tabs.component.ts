import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabOptions!: any[]
  @Output() tabChange = new EventEmitter<string>()

  selectTab(tab: string) {
    this.tabChange.emit(tab);
  }

}
