import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      this.librosDisponibles = [{
        titulo: 'Caperusita Roja',
        portada: 'https://images-na.ssl-images-amazon.com/images/I/81+jjKXl9fL.jpg',
        autor: 'Abraham Lara',
        ISBN: '12345566',
        fechaLanzamiento: new Date(),
      },
      {
        titulo: ' Fisica',
        autor: 'Albert Einstein',
        portada: 'https://i.pinimg.com/236x/53/49/a9/5349a9d4897db20170af4206c45a98ec.jpg',

        ISBN: '12345566',
        fechaLanzamiento: new Date(),
      },
      {
        titulo: 'Matematicas 2',
         autor: 'Diego de la O',
        portada: 'https://www.ellibrero.com/wp-content/uploads/2021/06/9786072121492.jpg',
        ISBN: '12345566',
        fechaLanzamiento: new Date(),
      }]
       
    }
    librosDisponibles;
    librosProximos = [];

}
