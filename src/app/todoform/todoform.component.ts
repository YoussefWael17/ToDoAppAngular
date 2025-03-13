import { Component, input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  @Output() messageEvent = new EventEmitter<string>();
  inputData: string = ''

  sendData() {
    if (this.inputData.trim()) {
      this.messageEvent.emit(this.inputData);
      this.inputData = '';
    }
  }
}