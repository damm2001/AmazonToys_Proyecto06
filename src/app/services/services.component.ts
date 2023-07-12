import { Component } from '@angular/core';

//Importación de la interfaz
import { Juguete } from '../interfaces/juguete';

//Importación del servicio
import { ServicioDatosJuguetesService } from '../providers/servicio-datos-juguetes.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  //Inyección de dependencia del servicio
  constructor(private dataProvider: ServicioDatosJuguetesService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Juguete[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Juguete[]); 
    })
  }

}
