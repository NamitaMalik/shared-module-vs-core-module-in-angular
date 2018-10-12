import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDos = [];
  constructor() { }

  addToDo(toDo) {
    this.toDos.push(toDo);
    console.log(this.toDos);
  }

  getToDos() {
    return this.toDos;
  }
}
