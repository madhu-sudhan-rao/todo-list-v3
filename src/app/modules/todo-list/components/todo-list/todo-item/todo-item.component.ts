import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoFormDialogComponent } from '../../new-todo-form-dialog/new-todo-form-dialog.component';
import { Todo } from '../todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: any
  @Output() statusChange = new EventEmitter<{status: string, id: number}>();
  @Output() deleteAction = new EventEmitter<number>()

  statuses = [
    { value: "PENDING", viewValue: "Pending" },
    { value: "IN_PROGRESS", viewValue: "In Progress" },
    { value: "COMPLETED", viewValue: "Done" }
    
  ]

  constructor(private fb: FormBuilder) {}

  checkForm !: FormGroup;

  ngOnInit() {
  this.checkForm = this.fb.group({
    status: ['']
    });
  }

  statusUpdate(status: string, id: number) {
    this.statusChange.emit({status, id})
  }

  deleteTodo(id: number) {
    this.deleteAction.emit(id)
  }

  readonly dialog = inject(MatDialog);

  openEditDialog(todo: Todo) {
    const dialogRef = this.dialog.open(NewTodoFormDialogComponent, {
      data: { todo }
    })


  }
}
