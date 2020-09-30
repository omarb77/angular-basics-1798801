import { AlumnoService } from './alumno.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-alumno-input',
  templateUrl: 'alumno-input.component.html',
  styleUrls: ['alumno-input.component.css']
})

export class AlumnoInputComponent{
  nombre: string=' ';

  constructor(private service: AlumnoService){}

  alta(){
    this.service.addAlumno(this.nombre);
    this.nombre= ' ';
  }
}

