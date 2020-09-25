import { TodoService } from './../../todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo.model';

@Component({
  selector: 'app-enter-list',
  templateUrl: './enter-list.component.html',
  styleUrls: ['./enter-list.component.css']
})
export class EnterListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

addWork(todoForm: NgForm){
 const todo: Todo = {work: todoForm.value.title, status: "DOne"};
 this.todoService.storeTodo(todo);
}

}
