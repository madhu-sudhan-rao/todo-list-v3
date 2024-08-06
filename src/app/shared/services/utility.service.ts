import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

constructor(private snackBarService: SnackbarService) { }

  copyToClipboard(url: string) {
    const textArea = document.createElement("textarea");
    textArea.textContent = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    this.snackBarService.openSnackBar("Link copied!")
  }

  // pasteText(): string {
  //   const textarea = document.createElement('textarea');
  //   document.body.appendChild(textarea);
  //   textarea.focus();
  //   document.execCommand('paste');
  //   let clipboardText = textarea.value;
  //   console.log('clipboardText: ', clipboardText);
  //   document.body.removeChild(textarea);
  //   return clipboardText;
  // }

  pasteText(formGroup: FormGroup,controlName: string): void {
    navigator.clipboard.readText()
      .then(text => {
        const control = formGroup.get(controlName);
        if (control) {
          control.setValue(text);
        }
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  }
  
}
