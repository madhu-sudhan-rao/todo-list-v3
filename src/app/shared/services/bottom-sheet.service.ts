import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(component: ComponentType<unknown>) {
    this._bottomSheet.open(component);
  }

  closeBottomSheet() {
    this._bottomSheet.dismiss()
  }

}
