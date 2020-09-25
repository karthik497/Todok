import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo/enter-list/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

public todos: Todo[]=[{
  work: 'this is my todo',
  status: 'Completed'
}];

private todoUpdated = new Subject<Todo[]>();

  constructor() { }

  getTodos(){
    return [...this.todos];
  }

  getTodoUpdated(){
    return this.todoUpdated.asObservable();
  }

  storeTodo(todo: Todo){
    this.todos.push(todo);
    this.todoUpdated.next([...this.todos]);
  }

}
