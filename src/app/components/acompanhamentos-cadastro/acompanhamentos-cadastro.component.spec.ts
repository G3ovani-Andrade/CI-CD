import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentosCadastroComponent } from './acompanhamentos-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('AcompanhamentosCadastroComponent', () => {
  let component: AcompanhamentosCadastroComponent;
  let fixture: ComponentFixture<AcompanhamentosCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentosCadastroComponent],
      imports: [HttpClientModule, AppRoutingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AcompanhamentosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
