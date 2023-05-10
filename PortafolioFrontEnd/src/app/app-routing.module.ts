import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutasComponent } from './components/aboutas/aboutas.component';
import { AuthGuard } from './auth.guard';
import { EditproyectocomponenteComponent } from './components/editproyectocomponente/editproyectocomponente.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { EditarIdiomasComponent } from './components/editar-idiomas/editar-idiomas.component';
import { EditarhabilidadesblandasComponent } from './components/editarhabilidadesblandas/editarhabilidadesblandas.component';
import { EditarhabilidadesdurasComponent } from './components/editarhabilidadesduras/editarhabilidadesduras.component';
import { EditareducacionComponent } from './components/editareducacion/editareducacion.component';
import { EditarexperiencialaboralComponent } from './components/editarexperiencialaboral/editarexperiencialaboral.component';
import { EditarpersonaComponent } from './components/editarpersona/editarpersona.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutas/:id', component: AboutasComponent },
  {path:'login', component: LoginComponent},
  { path: 'editproyectocomponente/:id', component: EditproyectocomponenteComponent },
  { path: 'crearproyecto', component: CrearProyectoComponent },
  {path: 'editarHabilidadesBlandas/:id', component: EditarhabilidadesblandasComponent},
  {path: 'editarHabilidadesDuras/:id', component: EditarhabilidadesdurasComponent},
  {path: 'editar-idioma/:id', component: EditarIdiomasComponent},
  {path: 'editareducacion/:id', component: EditareducacionComponent},
  {path: 'editarexperiencia/:id', component: EditarexperiencialaboralComponent},
  {path: 'editarpersona/:id', component: EditarpersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
