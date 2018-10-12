import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent  {
  toDoForm = new FormGroup({
    toDo: new FormControl(''),
    priority: new FormControl('')
  });

  constructor(private toDoService: TodoService) {}

  onSubmit() {
    console.log(this.toDoForm.value);
    console.log(this.toDoForm);
    this.toDoService.addToDo(this.toDoForm.value);
  }
}
