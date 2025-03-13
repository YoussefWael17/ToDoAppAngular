import { Component } from '@angular/core';
import { TodoformComponent } from '../todoform/todoform.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { log } from 'console';

@Component({
  selector: 'app-todowrapper',
  imports: [TodoformComponent , TodolistComponent],
  templateUrl: './todowrapper.component.html',
  styleUrl: './todowrapper.component.css'
})
export class TodowrapperComponent {
  tasks: string[] = [];
  receiveMessage(event: string) {
    this.tasks.push(event);
    // console.log(this.tasks);

  }

}
