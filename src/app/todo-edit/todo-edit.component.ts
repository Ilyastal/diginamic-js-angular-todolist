import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoListService } from '../service/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;

  constructor(private todoListeService: TodoListService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id']; 
    if(id === null){
      this.todo = new Todo(0, '');
      this.router.navigate(['add']);

    }else{
      this.todo = this.todoListeService.get(id); 
      this.router.navigate(['edit', id]);
    }
  }

}
