import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoScreenComponent } from './modules/todo-list/screens/todo-screen/todo-screen.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/todo-list/todo-list.module').then(m => m.TodoListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
