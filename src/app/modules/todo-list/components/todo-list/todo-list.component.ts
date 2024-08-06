import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { TodoApiService } from '../../services/todo-api.service';

export interface Todo {
  id: number;
  title: string;
  description: string;
  duePeriod: string;
  status: string;
  tags: any[]; // Adjust based on actual data structure
  time?: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos!: Observable<Todo[]>;
  totalTodos!: number;
  todosCounts!: Observable<any>;
  tabOptions = [
    { value: 'ALL', viewValue: 'All', count: 0, active: false },
    { value: 'PENDING', viewValue: 'Pending', count: 0, active: false },
    { value: 'IN_PROGRESS', viewValue: 'In Progress', count: 0, active: false },
    { value: 'COMPLETED', viewValue: 'Completed', count: 0, active: false },
  ];

  checkForEmptyTodos() {
    const activeTab = this.tabOptions.find((tabOption) => tabOption.active);
    if (activeTab) {
      return activeTab.count === 0;
    }
    return false;
  }

  constructor(
    private todoApiService: TodoApiService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.filterTodos('ALL')
    this.fetchCounts();
    this.checkForEmptyTodos();
  }

  fetchTodos() {
    this.todos = this.todoApiService.fetchTodos().pipe(
      map((response: any) => (response.data ? response.data : [])), // Wrap the single item in an array
      // map(),
      catchError((error) => {
        console.error('Error fetching todos', error);
        // this.error = error;
        return of([]);
      })
    );
  }

  fetchCounts() {
    this.todoApiService
      .getTodosCount()
      .pipe(
        map((response: any) => (response.data ? response.data.counts : [])),
        map((counts: any[]) => {
          counts.forEach((count) => {
            const option = this.tabOptions.find(
              (opt) => opt.value === count.status
            );
            if (option) {
              option.count = count.count;
            }
          });
          return this.tabOptions;
        })
      )
      .subscribe(
        (updatedOptions) => {
          // Use updatedOptions here if needed
        },
        (error) => {
          console.error('Error fetching counts:', error);
        }
      );
  }

  filterTodos(tab: string) {
    // Set active state for tab options
    this.tabOptions = this.tabOptions.map((tabOption) => {
      return {
        ...tabOption,
        active: (tabOption.active = tabOption.value === tab),
      };
    });

    if (tab === 'ALL') {
      this.fetchTodos();
      this.updateTotalTodosCount();
      return;
    }
    this.todos = this.todoApiService.filterByStatus(tab).pipe(
      tap(() => {
        this.fetchCounts(); // Update counts after filtering
      }),
      map((response: any) => (response.data ? response.data : [])),
      catchError((error) => {
        console.error('Error fetching todos', error);
        return of([]);
      })
    );

    // Subscribe to the observable to get the length
    this.updateTotalTodosCount();
  }

  updateTotalTodosCount() {
    this.todos.subscribe((todosArray) => {
      this.totalTodos = todosArray.length;
    });
  }

  updateStatus({ status, id }: { status: string; id: number }) {
    this.todoApiService
      .updateStatus({ status, id })
      .pipe(
        tap((response: any) => {
          this.fetchCounts();
          if (response.success) {
            // Update the local todos observable
            this.todos = this.todos.pipe(
              map((todos) =>
                todos.map((todo) =>
                  todo.id === id ? { ...todo, status } : todo
                )
              )
            );
          }
        }),
        catchError((error) => {
          console.error('Error updating status', error);
          return of([]); // Handle error or return the current todos
        })
      )
      .subscribe();
  }

  deleteTodo(id: number) {
    this.todoApiService
      .deleteTodo(id)
      .pipe(
        tap((response: any) => {
          if (response.success) {
            this.snackBar.openSnackBar(response.message);
            this.todos = this.todos.pipe(
              map((todos) => todos.filter((todo) => todo.id !== id))
            );
          }
        }),
        catchError((error) => {
          this.snackBar.openSnackBar('Deleting todo failed!');
          console.error('Error updating status', error);
          return of([]); // Handle error or return the current todos
        })
      )
      .subscribe();
  }
}
