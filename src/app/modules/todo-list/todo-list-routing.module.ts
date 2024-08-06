import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoScreenComponent } from './screens/todo-screen/todo-screen.component';

const routes: Routes = [
  {
    path: '',
    component: TodoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
