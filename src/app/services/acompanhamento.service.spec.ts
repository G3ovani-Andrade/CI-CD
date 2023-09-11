import { TestBed } from '@angular/core/testing';

import { AcompanhamentoService } from './acompanhamento.service';
import { HttpClientModule } from '@angular/common/http';

describe('AcompanhamentoService', () => {
  let service: AcompanhamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AcompanhamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
