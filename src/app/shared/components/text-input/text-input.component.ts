import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() placeholder!: string;
  @Input() maxLength!: number;
  @Input() numbersOnly: boolean = false;
  @Input() suffixIcon!: string;
  @Input() suffixIconParam!: string;
  @Input() suffixIconAction: () => void = () => {}; // Default function that does nothing
  @Input() prefixIcon!: string;
  @Input() isTextArea: boolean = false;
  @Output() onSuffixIconClick = new EventEmitter<any>()


  emitSuffixAction(event: any) {
    this.onSuffixIconClick.emit(event)
  }

  acceptNumbersOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
