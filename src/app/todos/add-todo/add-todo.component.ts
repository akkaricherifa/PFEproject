import { Component, OnInit,Inject } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from 'src/app/shared/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos!:Todo[];
  public todo: Todo = new Todo();

  constructor(public dialogRef: MatDialogRef<AddTodoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoService:TodoService) { }

  ngOnInit() {
    if (this.data !== null){
      this.todo = this.data;
    }
  }

  onSubmit(){
  
  this.onCreateTodo();

  }

  onCreateTodo():void {
    
    this.todoService.createTodo(this.todo)
    .subscribe(  data => {
      this.onClose(this.todo);
    });
  
  
  };


  onClose(value:any){
    this.dialogRef.close(value);
  }

}
