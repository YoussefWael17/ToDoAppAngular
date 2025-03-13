import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodowrapperComponent } from './todowrapper/todowrapper.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet  , TodowrapperComponent , TodoformComponent , TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task5';
}
