import { TestBed } from '@angular/core/testing';

import { PedagogoService } from './pedagogo.service';
import { HttpClientModule } from '@angular/common/http';

describe('PedagogoService', () => {
  let service: PedagogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PedagogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
