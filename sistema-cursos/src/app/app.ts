import { Component, signal } from '@angular/core';
import { CursosComponent } from './cursos/cursos';
import { EstudiantesComponent } from './estudiantes/estudiantes';
//import { InscripcionesComponent } from './inscripciones/inscripciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CursosComponent,
    EstudiantesComponent,
    //InscripcionesComponent
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('sistema-cursos');
}