import { Component, OnInit } from '@angular/core';
import { IToDo } from 'src/app/data/todo.model';
import { TodoCrudService } from 'src/app/services/todo-crud.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public toDoList: IToDo[] = [];
  taskNameValue: string = "";
  message: string = "";
  
  constructor(private serviceCrud: TodoCrudService) { }

  ngOnInit(): void {
    this.toDoList = this.serviceCrud.getAllTasks();
  }

  getAllTasks(): IToDo[] {
    return this.toDoList = this.serviceCrud.getAllTasks();
  }

  addTask(task: string): void {
    if (task === "") return;

    this.serviceCrud.addTask(task);
    this.getAllTasks();
    this.taskNameValue = "";
  }

  removeTasks() {
    this.toDoList.forEach((task) => {
      
      if (task.remove === true) {
        console.log("componente >>> " + task.id);
        this.serviceCrud.removeTask(task);
      }
    });
    this.getAllTasks();
  }

}
