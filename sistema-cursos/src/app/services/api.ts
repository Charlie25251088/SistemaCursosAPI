import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'https://localhost:7136/api';

  constructor(private http: HttpClient) { }

  getCursos(){
  return this.http.get<any[]>(this.apiURL + '/Cursos');
}

 getEstudiantes(){
  return this.http.get<any[]>(this.apiURL + '/Estudiantes');
}

  getInscripciones(){
    return this.http.get(this.apiURL + '/Inscripciones');
  }
}