import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  private materias:any=[];

  constructor() { 
    this.materias.push("Taller de programacion");
    this.materias.push("Redes de computadoras I");
    this.materias.push("Bases de datos II");
    this.materias.push("Sistemas web");
    this.materias.push("Estructuras de datos y algoritmos");
    this.materias.push("Sistemas operativos");
    this.materias.push("Bases de datos I");
    this.materias.push("Investigacion operativa I");
    this.materias.push("Taller de investigacion");
    this.materias.push("Programacion II");
  }

  ngOnInit() {
  }

}
