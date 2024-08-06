import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoFormDialogComponent } from '../new-todo-form-dialog/new-todo-form-dialog.component';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss',
})
export class NewTodoComponent {
  readonly dialog = inject(MatDialog);

  newTodoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newTodoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: [''],
      time: [''],
      tags: [[]],
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewTodoFormDialogComponent)
  }




}
