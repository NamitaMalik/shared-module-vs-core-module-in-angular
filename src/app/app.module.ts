import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ToDoModule } from './to-do/to-do.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ToDoModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
