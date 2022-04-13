 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Model/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  path="http://localhost:3000/candidat";
  
constructor(private http: HttpClient) { }
createCandidat(data:any) {
  return this.http.post(this.path+"/addEmploye",{
    prenom:data.prenom,
    nom:data.nom,
    dateOfBirth:data.dateOfBirth,
    phone:data.phone,
    email:data.email,
    adresse:data.adresse,
    ville:data.ville,
    pathCv:data.pathCv,
    pathMotivationLetter:data.pathMotivationLetter,
    niveauEtud:data.niveauEtud,
    titreDiplome:data.titreDiplome,
    university:data.university,
    niveauExp:data.niveauExp,
    experience:data.experience,
    archived:data.archived

  });
}
}