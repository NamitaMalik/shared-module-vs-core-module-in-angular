import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDoDataSource } from './display-todo/todo-data-source';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDos = [];
  subject = new BehaviorSubject(this.toDos);
  dataSource = new ToDoDataSource(this.subject.asObservable());
  constructor() { }

  addToDo(toDo) {
    this.toDos.push(toDo);
    this.subject.next(this.toDos);
  }

  getToDos() {
    return this.toDos;
  }
}
