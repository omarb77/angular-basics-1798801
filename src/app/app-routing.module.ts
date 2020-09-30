import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoInputComponent } from './alumno/alumno-input.component';

const routes: Routes = [
  {path: '', component: AlumnoComponent},
  {path: 'input', component: AlumnoInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
