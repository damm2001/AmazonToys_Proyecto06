import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoactionComponent } from './calltoaction.component';

//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';

//Importe el servicio
import { ServicioDatosJuguetesService } from '../providers/servicio-datos-juguetes.service';


describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({

      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ServicioDatosJuguetesService ]

      //declarations: [ServicesComponent]


    });
    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {

      // Valide que la respuesta sea mayor que 0
      expect(component.juguete.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();

    });
    //expect(component).toBeTruthy();
  });
});
