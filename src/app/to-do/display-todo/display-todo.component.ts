import { Component } from '@angular/core';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent  {
  dataSource = this.toDoService.dataSource;
  displayedColumns: string[] = ['toDo', 'priority'];

  constructor(private toDoService: ToDoService) {
  }
}

