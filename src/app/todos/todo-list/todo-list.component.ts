import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
// import { MatDialog, } from '@angular/material';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos!:Todo[];
  constructor() { }

  ngOnInit(): void {
  }

  // onAddTodo() {
  //   this.openTodoDialog(null);

  // }

//   openTodoDialog(data?:any){
//     const dialogRef = this.dialog.open(AddTodoComponent,{
//       disableClose : true,
//       autoFocus : true ,
//       width : "50%",
//       data : data
//     });
    
//     dialogRef.afterClosed().subscribe(result =>{
//       if (result && data == null){
//         this.todos.push(result);
//       }}
//    ); 
//   }
// }
}