import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from '../app/components/perfil/perfil.component';
import { ExperienciaComponent } from '../app/components/experiencia/experiencia.component';
import { HabilidadesComponent } from '../app/components/habilidades/habilidades.component';
import { ProyectosComponent } from '../app/components/proyectos/proyectos.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
