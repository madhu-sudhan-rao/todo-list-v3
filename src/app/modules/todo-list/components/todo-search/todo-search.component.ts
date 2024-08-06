import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.scss'
})
export class TodoSearchComponent implements OnInit {
  todoSearchForm!: FormGroup;

  constructor(private gb: FormBuilder) {}

  ngOnInit() {
    this.todoSearchForm = this.gb.group({
      search: ['']
    })
  }

}
