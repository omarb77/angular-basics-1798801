import{Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AlumnoService{
  alumnosChanged = new Subject<string[]>();
  alumnos: string[] = [];

  constructor(private http: HttpClient){}

  fetchAlumnos(){
    this.http.get<any>('https://swapi.dev/api/people/').pipe(map(response => {
      return response.results.map(obj => obj.name)
    }))
    .subscribe(response => {
      console.warn(response);
      this.alumnos=(response);
      this.alumnosChanged.next(this.alumnos);
    });
  }
  addAlumno(name: string){
    this.alumnos.push(name);
    this.alumnosChanged.next(this.alumnos);
  }

  removeAlumno(name: string){
    this.alumnos = this.alumnos.filter(alumno => {
      return alumno !== name;
    })
    this.alumnosChanged.next(this.alumnos);
  }
}
