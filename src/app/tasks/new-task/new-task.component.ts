import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');


  constructor(private tasksService: TasksService) {
  }


  taskData = <{ title: string; description: string; }>({}); 

  onAddTask(title: string, description: string) {

    this.taskData = {title, description};
    // this.formEl()?.nativeElement.reset();
    this.tasksService.addTask(this.taskData);
  }
}
