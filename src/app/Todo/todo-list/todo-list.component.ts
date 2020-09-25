import { TodoService } from './../../todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../enter-list/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,OnDestroy {

  constructor(private todoservice: TodoService) { }
displayTodos: Todo[]=[];

a: Subscription;

  ngOnInit(): void {
    this.displayTodos=this.todoservice.getTodos();
this.a=this.todoservice.getTodoUpdated().subscribe(
  (todos)=>{
    this.displayTodos=todos;
  }
)

  }
  
  ngOnDestroy(){
    this.a.unsubscribe();
  }

}
