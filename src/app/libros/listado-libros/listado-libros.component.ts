import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
  
  constructor() { }
@Input()
libros;
  ngOnInit(): void {
  }

  remover (indiceLibro:number): void{
    this.libros.splice(indiceLibro,1);
  }
 
  
}
