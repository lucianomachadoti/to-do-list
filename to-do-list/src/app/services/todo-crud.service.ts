import { Injectable } from '@angular/core';
import { IToDo } from 'src/app/data/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService {
  private toDoList: IToDo[] = [];
  private taskId: number = 0;

  getAllTasks(): IToDo[] {
    return this.toDoList;
  }

  addTask(task: string) {
    const taskToAdd = {
      id: this.taskId++,
      name: task,
      remove: false
    }

    this.toDoList.push(taskToAdd);
  }

  removeTask(task: IToDo): boolean {
    let index = this.toDoList.findIndex(listTask => listTask.id === task.id);
    if (index > -1) {
      this.toDoList.splice(index, 1);
      return true;
    }
    return false;
  }
}
