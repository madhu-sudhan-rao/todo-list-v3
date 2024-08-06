import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MATERIAL_UI_COMPONENTS : any[]= [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatListModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatChipsModule,
  MatCheckboxModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_UI_COMPONENTS
  ],
  exports: [
    MATERIAL_UI_COMPONENTS
  ]
})
export class MaterialUiModule { }
