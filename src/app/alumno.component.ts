import { Component } from '@angular/core';

@Component({
  selector:'app-alumno',
  templateUrl:'./alumno.component.html',
  styleUrls:['./alumno.component.css']
})
export class AlumnoComponent{
  activo: boolean = true;
  alumnos: string[]=['Omar','Alejandro', 'Jorge', 'Bryan'];
  onClickActivar(){
    this.activo= !this.activo;
  }
}