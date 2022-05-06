import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { Router } from '@angular/router';
import { MatDialog, } from '@angular/material/dialog';
import { TodoService } from 'src/app/shared/todo.service';
import {  CalendarOptions } from '@fullcalendar/angular';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {    MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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
  todos:any;
  todoForm!: FormGroup
  closeResult = '';
  constructor(private dialog: MatDialog,
    private todoService:TodoService,
    private router:Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

    public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cette Tache?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  ngOnInit(): void {
    this.affiche();
    this.todoForm= this.fb.group ( 
      {
        title:['',Validators.required],
     
   
      }

    )
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  createTodo() {
    this.todoService.createTodo(this.todoForm.value).subscribe((res) => {
      this.router.navigate(['/list-todo']);
      this.toastr.success('Task Ajouté avec succès');
    });
    console.log(this.todoForm.value);
  }
 

  affiche(){
    this.todoService.getAllTodo().subscribe(
      res=>{
        this.todos=res
      },
    )
  }
  
  delete(id:any){
    this.todoService.deleteTodo(id).subscribe( data => {    
    this.affiche()
     this.toastr.success("Task supprimé avec succes")
    this.router.navigate(['/todo-list']);  
    },
    )
  }
  
  
  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.comletedTodo(todoData.id);
  }
  
  completedTodo (id:number){
    this.todoService.comletedTodo(id);
    
  }

}
  











