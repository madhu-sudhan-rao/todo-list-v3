import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { DUE_PERIODS } from '../../data/due-periods.data';
import { STATUSES } from '../../data/statuses.data';
import { TODO_CATEGORIES } from '../../data/todo-categories.data';
import { TodoApiService } from '../../services/todo-api.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-new-todo-form-dialog',
  templateUrl: './new-todo-form-dialog.component.html',
  styleUrl: './new-todo-form-dialog.component.scss',
})
export class NewTodoFormDialogComponent {
  title: string = 'New task';
  label: string = 'Create';
  newTodoForm!: FormGroup;
  todoCategories = TODO_CATEGORIES;
  statuses = STATUSES;

  duePeriods = DUE_PERIODS;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoApiService,
    @Inject(MAT_DIALOG_DATA) public data: { todo?: Todo },
    private dialogRef: MatDialogRef<NewTodoFormDialogComponent>,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit() {
    this.newTodoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: [''],
      time: [''],
      tags: [[]],
      status: [''],
      due: [''],
    });

    if (this.data?.todo) {
      this.title = 'Edit task';
      this.label = 'Save Changes';
      this.newTodoForm.patchValue({
        title: this.data.todo.title,
        description: this.data.todo.description,
        // Assuming you might want to format or parse date and time
        date: this.data.todo.duePeriod === 'TODAY' ? new Date() : '',
        time: this.data.todo.time || '',
        tags: this.data.todo.tags, // Adjust based on your tag structure
        status: this.data.todo.status,
        due: this.data.todo.duePeriod,
      });
    }
  }

  createTodo() {
    if (this.newTodoForm.valid) {
      if (this.data?.todo) {
        // Update existing todo
        this.todoService
          .updateTodo({
            id: this.data.todo.id,
            todo: this.newTodoForm.value,
          })
          .subscribe((response: any) => {
            this._snackBar.openSnackBar('Todo edited successfully.');
            this.dialogRef.close();
          });
      } else {
        // Create new todo
        this.todoService.createTodo(this.newTodoForm.value);
      }
    }
  }
}
