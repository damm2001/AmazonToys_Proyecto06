import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ServicioDatosJuguetesService } from './servicio-datos-juguetes.service';

import { Juguete } from '../interfaces/juguete';



describe('ServicioDatosJuguetesService', () => {
  let service: ServicioDatosJuguetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ServicioDatosJuguetesService ]
    });

    service = TestBed.inject(ServicioDatosJuguetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResponse() should return value from observable', (done: DoneFn) => {

    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {

      // Valide que la respuesta sea mayor que 0
      expect((data as Juguete[]).length).toBeGreaterThan(0)
	      
      // Que espere hasta que llegue la respuesta 
      done();

    });
    
  });
});
