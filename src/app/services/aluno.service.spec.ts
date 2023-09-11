import { TestBed } from '@angular/core/testing';

import { AlunoService } from './aluno.service';
import { HttpClientModule } from '@angular/common/http';

describe('AlunoService', () => {
  let service: AlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AlunoService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${AlunoService.prototype.obterAlunos.name} deve trazer uma lista de alunos quando chamado`, async() => {
    let alunos = await service.obterAlunos();

    expect(alunos.length).toBeGreaterThan(1);
  });
});
