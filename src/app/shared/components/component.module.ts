import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from '../ui-modules/material-ui/material-ui.module';
import { HeaderComponent } from './header/header.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { ButtonComponent } from './button/button.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ListComponent } from './list/list.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectListComponent } from './select-list/select-list.component';
import { CalendarInputComponent } from './calendar-input/calendar-input.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FeatureCardComponent,
    ButtonComponent,
    AlertMessageComponent,
    ListComponent,
    TextInputComponent,
    SelectListComponent,
    CalendarInputComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FeatureCardComponent,
    ButtonComponent,
    AlertMessageComponent,
    ListComponent,
    TextInputComponent,
    SelectListComponent,
    CalendarInputComponent,
    SpinnerComponent
  ]
})
export class ComponentModule { }
