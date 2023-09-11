import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosComponent } from './alunos.component';
import { HttpClientModule } from '@angular/common/http';

describe('AlunosComponent', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve haver itens na variável alunos quando executado o ngOnInit', async ()=>{
    await component.ngOnInit();
    expect(component.alunos).toBeTruthy();
  })

  it('Deve validar se existe itens no array quando pesquisar no input', async ()=>{
    let input: HTMLInputElement  = document.querySelector('#filtroAluno');
    input.value = 'a';

    await component.ngOnInit();
    component.onInputChange();

    expect(component.alunos.length).toBeGreaterThan(0);
  })
});
