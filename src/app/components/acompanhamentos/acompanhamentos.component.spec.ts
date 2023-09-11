import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentosComponent } from './acompanhamentos.component';
import { HttpClientModule } from '@angular/common/http';

describe('AcompanhamentosComponent', () => {
  let component: AcompanhamentosComponent;
  let fixture: ComponentFixture<AcompanhamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentosComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(AcompanhamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
