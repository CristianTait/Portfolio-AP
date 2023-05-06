import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LAPComponent } from './components/lap/lap.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutasComponent } from './components/aboutas/aboutas.component';
import { NewcomponentComponent } from './componente/newcomponent/newcomponent.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EditproyectocomponenteComponent } from './components/editproyectocomponente/editproyectocomponente.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { EditarhabilidadesdurasComponent } from './components/editarhabilidadesduras/editarhabilidadesduras.component';
import { EditarhabilidadesblandasComponent } from './components/editarhabilidadesblandas/editarhabilidadesblandas.component';
import { EditarIdiomasComponent } from './components/editar-idiomas/editar-idiomas.component';
import { EditareducacionComponent } from './components/editareducacion/editareducacion.component';
import { EditarexperiencialaboralComponent } from './components/editarexperiencialaboral/editarexperiencialaboral.component';
import { EditarpersonaComponent } from './components/editarpersona/editarpersona.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LAPComponent,
    RedesComponent,
    BannerComponent,
    AboutasComponent,
    NewcomponentComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    EditproyectocomponenteComponent,
    CrearProyectoComponent,
    EditarhabilidadesdurasComponent,
    EditarhabilidadesblandasComponent,
    EditarIdiomasComponent,
    EditareducacionComponent,
    EditarexperiencialaboralComponent,
    EditarpersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AboutasComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [AuthGuard], // Agrega el guard AuthGuard aquí
  bootstrap: [AppComponent]
})
export class AppModule { }