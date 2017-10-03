import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  private lenguajes:any=[];

  constructor(private http: Http) {
   }

  ngOnInit() {
;
    let url = 'http://localhost:3000/habilidades'

    this.http.get(url).subscribe((response: any) => {
      this.lenguajes = JSON.parse(response._body);
    })

  }

}
