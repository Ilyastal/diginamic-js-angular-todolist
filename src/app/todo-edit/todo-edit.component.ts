import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoListService } from '../service/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo ;
  id: any; 
  constructor(private todoListeService: TodoListService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todo = new Todo(0, '');
    this.id = this.activatedRoute.snapshot.params['id']; 
    if(this.id){
      console.log(this.id);
      this.todo = this.todoListeService.get(parseInt(this.id));
      console.log(this.todo);
    }
  }
  onSubmit(f: NgForm){
    if(!this.id){
      this.todo.id = this.todoListeService.getNewId();
      this.todo.label= f.value['tache'];
      this.todoListeService.add(this.todo);
    }else{
      this.todo.id = this.id;
      this.todo.label =f.value['tache'];
      this.todoListeService.edit(this.todo);
    } 
    this.router.navigate(['/list']);
  }
}
