import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoScreenComponent } from './screens/todo-screen/todo-screen.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ComponentModule } from "../../shared/components/component.module";
import { SharedModule } from '../../shared/shared.module';
import { NewTodoFormDialogComponent } from './components/new-todo-form-dialog/new-todo-form-dialog.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EmptyTodosComponent } from './components/empty-todos/empty-todos.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';


@NgModule({
  declarations: [
    TodoScreenComponent,
    NewTodoComponent,
    TodoListComponent,
    NewTodoFormDialogComponent,
    TodoItemComponent,
    TabsComponent,
    EmptyTodosComponent,
    TodoSearchComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ComponentModule,
    SharedModule
]
})
export class TodoListModule { }
