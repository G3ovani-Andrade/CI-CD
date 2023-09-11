import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosCadastroComponent } from './alunos-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AlunosCadastroComponent', () => {
  let component: AlunosCadastroComponent;
  let fixture: ComponentFixture<AlunosCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosCadastroComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(AlunosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit deve cadastrar mais um aluno quando apertar no botão Cadastrar aluno', async () => {
    component.alunoForm.patchValue({
      nome: 'Rayane',
      telefone: '81986603177',
      dataNascimento: '2000-12-12',
      cpf: '63497534021',
      nota: 1,
      id: 20,
    });
    let newAluno = await component.onSubmit();
    expect(newAluno).toBeTruthy();
  });

  it('Deve validar a data se o formato é XX/XX/XXX quando for criar um aluno', () => {
    component.alunoForm.patchValue({
      nome: 'Rayane',
      telefone: '81986603177',
      data: '2000-12-12',
      cpf: '63497534021',
      nota: 1,
      id: 20,
    });

    let dataFormatada = component.formatarData(
      component.alunoForm.get('data')?.value
    );

    expect(dataFormatada).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  it('Deve criar um novo usuário quando o campo nome e idade estão preenchido', () => {
    spyOn(component, 'formatarData');

    component.onSubmit();
    expect(component.formatarData).toHaveBeenCalled();
  });

  it('deve chamar o metodo somar duas uma vez', () => {
    spyOn(component, 'formatarData');

    component.onSubmit();
    component.onSubmit();
    component.onSubmit();

    expect(component.formatarData).toHaveBeenCalledTimes(3);
  });

});
