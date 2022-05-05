import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  path="http://localhost:3000/todo";
  
  todo: Todo = new Todo();
  
  constructor(private http: HttpClient) { }
  createTodo(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
  getAllTodo(){
    return this.http.get(this.path+"/");
  }
  
  getTodo(id: number) {
    return this.http.get(this.path+"/"+ id);
  }

  deleteTodo(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }
  
  comletedTodo(id:number) {
    return this.http.get(this.path+"/"+ id);
  }

 
 
  
}


