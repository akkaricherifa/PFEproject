import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { Router } from '@angular/router';
import { MatDialog, } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoService } from 'src/app/shared/todo.service';


import {    MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  isPopupOpened = false;
  todo : Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();
  // todos!:Todo[];
  u:any;
  todos:any;

  constructor(private dialog: MatDialog,
    private todoService:TodoService,
    private router:Router) { }

    

  ngOnInit(): void {
    this.affiche();
  }


  onAddTodo() {
    this.openTodoDialog(null);

  }

  openTodoDialog(data?:any){
    
    const dialogRef = this.dialog.open(AddTodoComponent,{
      disableClose : true,
      autoFocus : true ,
      width : "1000%",
      height: '100%',
      data : data,
      
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result && data == null){
        this.todos.push(result);
      }}
   ); 
    }

  

 

  affiche(){
    this.todoService.getAllTodo().subscribe(
      res=>{
        this.todos=res
      },
    )
  }
  
  deleteTodo(todo:Todo): void {
    this.todoService.deleteTodo(todo.id)
      .subscribe( data => {
        this.todos = this.todos.filter((u: Todo) => u !== todo);
      })
    
  }
  
  
  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.comletedTodo(todoData.id);
  }
  
  completedTodo (id:number){
    this.todoService.comletedTodo(id);
    
  }
  // setter(todo:Todo){
  //   this.todo= todo;
  // }
  // getter(){
  //   return this.todo;
  // }

}
  











