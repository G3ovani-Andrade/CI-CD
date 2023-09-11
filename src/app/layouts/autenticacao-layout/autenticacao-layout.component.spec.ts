import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoLayoutComponent } from './autenticacao-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AutenticacaoLayoutComponent', () => {
  let component: AutenticacaoLayoutComponent;
  let fixture: ComponentFixture<AutenticacaoLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticacaoLayoutComponent],
      imports: [HttpClientModule, AppRoutingModule]
    });
    fixture = TestBed.createComponent(AutenticacaoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
