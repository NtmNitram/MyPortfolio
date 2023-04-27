import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { AboutComponent } from './Componentes/about/about.component';
import { EducationComponent } from './Componentes/education/education.component';
import { ExperienceComponent } from './Componentes/experience/experience.component';
import { ProjectsComponent } from './Componentes/projects/projects.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
