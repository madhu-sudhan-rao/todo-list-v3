import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { SnackbarService } from '../../../shared/services/snackbar.service';

export interface ApiResponse {data: any, success: boolean, message: string}

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient, private snackBar: SnackbarService) { }

  createTodo(todo: any) {
    const newTodo = {
      title: todo.title,
      description: todo.description,
      duePeriod: todo.due,
      status: todo.status,
      tags: todo.tags
    }

    return this.http.post(`${environment.API_URL}todos/new`, newTodo).subscribe(
      (response) => {
        console.log(response);
        this.snackBar.openSnackBar('Task created.')
        },
        (error) => {
          console.error(error);
          }
    )
  }

  fetchTodos() {
    return this.http.get(`${environment.API_URL}todos`)
  }

  updateStatus({status, id}: {status: string, id: number}) {
    let params = new HttpParams()

    params = params.append('status', status)

    return this.http.put(`${environment.API_URL}todos/${id}`, null ,{ params : params })

  }

  deleteTodo(id: number) {
    return this.http.delete(`${environment.API_URL}delete/${id}`)
  }

  updateTodo({id, todo}:{id: any, todo: any}) {
    const newTodo = {
      title: todo.title,
      description: todo.description,
      duePeriod: todo.due,
      status: todo.status,
      tags: todo.tags
    }
    return this.http.put(`${environment.API_URL}todo/edit/${id}`, newTodo)
  }

  filterByStatus(status: string) {
    let params = new HttpParams();
    params = params.append('status', status);
    return this.http.get(`${environment.API_URL}todos/filter`, {params: params})
  }

  getTodosCount() {
    return this.http.get(`${environment.API_URL}todos/counts`)
  }
}
