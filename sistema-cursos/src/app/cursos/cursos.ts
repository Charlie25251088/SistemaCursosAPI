import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cursos.html'
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getCursos().subscribe((data:any[])=>{
      console.log("Cursos:",data);
      this.cursos = data;
    });
  }
}