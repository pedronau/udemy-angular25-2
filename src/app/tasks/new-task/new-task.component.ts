import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type addedTask } from './new-task.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<boolean>();

  private taskService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCloseNewTask() {
    this.close.emit(false);
  }

  onSubmit() {
    this.taskService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId);
    this.close.emit(false);
  }

}
