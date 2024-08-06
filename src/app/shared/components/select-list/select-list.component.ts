import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.scss'
})
export class SelectListComponent {
  @Input() label!: string;
  @Input() options!: any[]; // {value: XXX, viewValue: XXX }
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() multiSelect: boolean = false;

}
