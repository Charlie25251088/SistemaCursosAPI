import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './estudiantes.html'
})
export class EstudiantesComponent implements OnInit {

  estudiantes:any[]=[];

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getEstudiantes().subscribe((data:any[])=>{
      console.log("Estudiantes:",data);
      this.estudiantes=data;
    });
  }
}