import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  path="http://localhost:3000/suggestion";
  
  
  constructor(private http: HttpClient) { }
  createSuggestion(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
  getAllSuggestion(){
    return this.http.get(this.path+"/");
  }
  
  getSuggestion(id: number) {
    return this.http.get(this.path+"/"+ id);
  }

  deleteSuggestion(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }
  


 
 
  
}


