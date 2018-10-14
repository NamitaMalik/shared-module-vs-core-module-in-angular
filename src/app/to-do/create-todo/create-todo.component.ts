import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ToDoService } from '../todo.service';
import { forbiddenTextValidator } from '../../shared/forbidden-todo.directive';
import { CustomErrorStateMatcher } from '../../shared/error-state-matcher';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent  {
  @ViewChild(FormGroupDirective) form;
  matcher = new CustomErrorStateMatcher();
  toDoForm = new FormGroup({
    toDo: new FormControl('', [Validators.required, forbiddenTextValidator(['eat', 'drink', 'sleep'])]),
    priority: new FormControl('')
  });

  constructor(private toDoService: ToDoService) {}

  onSubmit() {
    this.toDoService.addToDo(this.toDoForm.value);
    this.form.reset();
  }
}
