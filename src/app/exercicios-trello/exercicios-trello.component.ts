import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios-trello',
  templateUrl: './exercicios-trello.component.html',
  styleUrls: ['./exercicios-trello.component.css']
})
export class ExerciciosTrelloComponent {
  array: string[] = ["Aluno 2", "Aluno 3"];

  calculaMedia(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
  }

  insiraNoInicio(valor){
    this.array.unshift(valor);
    return this.array;
  }

  removaItem(valor){
    let index = this.array.indexOf(valor);
    if(index != -1){
      this.array.splice(index, 1);
    }
    return this.array;
  }
}
