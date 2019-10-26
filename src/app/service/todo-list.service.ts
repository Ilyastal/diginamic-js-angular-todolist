import { Injectable } from '@angular/core';
import { Todos, Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Todos = [];
  constructor() { }
  getAll(): Todos{
    return this.todoList;
  }
  get(id : number): Todo{
   let todo: Todo;
    this.todoList.forEach(to => {
      if(to.id === id){
        todo = to;
      }
    })
    return todo;
  }
  getNewId(): number{
    let id= [];
    this.todoList.forEach(to => {
      id.push(to.id);
    });
    if(!id.length){
      return 1; 
    }else{
      return Math.max(...id) + 1;
    }
  }
  add(todo: Todo){
    this.todoList.push(todo);
  }
  edit(todo : Todo){
    this.todoList.forEach(to =>{
      if(to.id === todo.id){
        to.label = todo.label;
      };
    });
  }
  delete(id: number){
    this.todoList.forEach((to, index, object) => {
      if(id === to.id){
        object.splice(index, 1); 
      }
    })
  }
}
