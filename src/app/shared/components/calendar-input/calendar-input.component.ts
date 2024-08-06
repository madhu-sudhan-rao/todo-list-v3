import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrl: './calendar-input.component.scss'
})
export class CalendarInputComponent {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() multiSelect: boolean = false;
  @Input() dateFormat: string = 'DD/MM/YYY';

    // Function to format date dynamically
    getFormattedDate(date: Date | null): string {
      return date ? moment(date).format(this.dateFormat) : '';
    }

}
