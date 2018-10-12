import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  toDos = [];
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.toDos = this.toDoService.getToDos();
  }

}
