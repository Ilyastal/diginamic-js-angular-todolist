import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const routes: Routes = [
  {path: 'list', component: TodoListComponent},
  {path: 'add', component: TodoEditComponent},
  {path: 'edit/:id', component: TodoEditComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
