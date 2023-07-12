import { TestBed } from '@angular/core/testing';

import { ServicioDatosJuguetesService } from './servicio-datos-juguetes.service';

describe('ServicioDatosJuguetesService', () => {
  let service: ServicioDatosJuguetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatosJuguetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
