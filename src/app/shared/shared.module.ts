import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from './ui-modules/material-ui/material-ui.module';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentModule,
    MaterialUiModule
  ],
  exports: [
    MaterialUiModule,
    ComponentModule
  ]
})
export class SharedModule { }
