import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type addedTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancelNewTask = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<addedTask>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelNewTask() {
    this.cancelNewTask.emit(false);
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    })
  }

}
