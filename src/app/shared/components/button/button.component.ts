import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() styleClass!: string;
  @Input() fullButton: boolean = false
  @Input() buttonText!: string;
  @Input() buttonIcon!: string;
  @Input() hasIcon: boolean = false;
  @Input() actionButton: boolean = false
  @Input() onlyIcon: boolean = false
  @Input() iconName!: string;
  @Input() tooltipText!: string;
  @Output() onButtonClick = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }

}
