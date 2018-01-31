import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DisciplinaRouting } from './disciplina.routing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms'
import {
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatListModule
} from '@angular/material';
import { DisciplinaService } from './disciplina.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { ProfessorService } from './professor.service';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule
  ],
  providers: [
    DisciplinaService,
    FormBuilder,
    HttpClient,
    ProfessorService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' }
  ],
  entryComponents: [ProfessorComponent],
  declarations: [ConsultaComponent, FormularioComponent, ProfessorComponent]
})
export class DisciplinaModule { }
