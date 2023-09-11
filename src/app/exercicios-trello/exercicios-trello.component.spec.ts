import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosTrelloComponent } from './exercicios-trello.component';

fdescribe('ExerciciosTrelloComponent', () => {
  let component: ExerciciosTrelloComponent;
  let fixture: ComponentFixture<ExerciciosTrelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciciosTrelloComponent]
    });
    fixture = TestBed.createComponent(ExerciciosTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculaMedia deve retornar a média de 3 números quando chamado', ()=>{
    let media = component.calculaMedia(10,10,10);

    expect(media).toEqual(10);
  })

  it('deve adicionar ao início do array quando chamado', ()=>{
    let valor = 'Aluno 1';
    let array = component.insiraNoInicio(valor);

    expect(array[0] == valor).toBe(true);
  })

  it('deve aumentar o array quando adicionar mais um item', ()=>{
    let tamanhoArray = component.array.length;
    component.insiraNoInicio('Aluno 1');

    expect(component.array.length).toBeGreaterThan(tamanhoArray);
  })

  it('deve remover um item do array quando chamado', ()=>{
    let tamanhoArray = component.array.length;
    component.removaItem("Aluno 3");

    expect(component.array.length).toBeLessThan(tamanhoArray);
  })
});
