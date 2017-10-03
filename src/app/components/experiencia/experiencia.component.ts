import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  private materias:any=[];

  constructor(private http: Http) { 
  }

  ngOnInit() {

    let url = 'http://localhost:3000/experiencia'
    
        this.http.get(url).subscribe((response: any) => {
          this.materias = JSON.parse(response._body);
        })

  }

}
