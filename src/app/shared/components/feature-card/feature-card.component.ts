import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() cardTitle!: string;
  @Input() iconName!: string;
  @Input() buttonStyleClass!: string;
  @Output() onButtonClicked = new EventEmitter();

  onClick() {
    this.onButtonClicked.emit();
  }

}
