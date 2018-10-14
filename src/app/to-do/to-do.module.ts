import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CreateTodoComponent,
    DisplayTodoComponent,
  ],
  exports: [
    CreateTodoComponent,
    DisplayTodoComponent,
  ]
})
export class ToDoModule {}
