import {Component, OnInit, OnDestroy} from '@angular/core';
import { AlumnoService} from './alumno.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit, OnDestroy{
  private alumnosSubs: Subscription;
  consultando: boolean = true;
  alumnos: string[];

  constructor(private service: AlumnoService){
    //this.alumnos = service.alumnosDummy;
  }

  ngOnInit(){
    //this.alumnos= this.service.alumnos;
    this.service.fetchAlumnos();
    this.alumnosSubs=
    this.service.alumnosChanged.subscribe(alumnos => {
      this.alumnos=alumnos;
      this.consultando= false;
    })
  }

  ngOnDestroy(){
    this.alumnosSubs.unsubscribe();
  }

  onRemoveAlumno(name: string){
    this.service.removeAlumno(name);
  }
}

