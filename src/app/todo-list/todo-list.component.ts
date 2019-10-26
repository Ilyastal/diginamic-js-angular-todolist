import { Component, OnInit } from '@angular/core';
import { Todos } from '../models/todo.model';
import { TodoListService } from '../service/todo-list.service';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: Todos ;

  constructor(private todoListService: TodoListService ) {

   }

  ngOnInit() {
    this.todolist = this.todoListService.getAll();  
  }
  deleteTodo(id: number){
    this.todoListService.delete(id);
  }
}
