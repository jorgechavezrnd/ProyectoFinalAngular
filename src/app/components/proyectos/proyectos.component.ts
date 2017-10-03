import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  private imagenes:any=[];

  constructor(private http: Http) { }

  ngOnInit() {
    let url = 'http://localhost:3000/imagenes'
    
    this.http.get(url).subscribe((response: any) => {
      this.imagenes = JSON.parse(response._body);
    })

  }

}
