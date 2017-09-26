import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  private lenguajes:any=[];

  constructor() {
    this.lenguajes.push("C++");
    this.lenguajes.push("Java");
    this.lenguajes.push("C#");
    this.lenguajes.push("C");
    this.lenguajes.push("Python");
    this.lenguajes.push("PHP");
    this.lenguajes.push("Haskell");
    this.lenguajes.push("Scala");
    this.lenguajes.push("Ruby");
    this.lenguajes.push("Ensamblador");
   }

  ngOnInit() {
  }

}
