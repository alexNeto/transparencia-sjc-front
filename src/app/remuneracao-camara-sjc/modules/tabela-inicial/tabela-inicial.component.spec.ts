import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuneracaoCamaraSjcTabelaInicialComponent } from './remuneracao-camara-sjc-tabela-inicial.component';

describe('RemuneracaoCamaraSjcTabelaInicialComponent', () => {
  let component: RemuneracaoCamaraSjcTabelaInicialComponent;
  let fixture: ComponentFixture<RemuneracaoCamaraSjcTabelaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemuneracaoCamaraSjcTabelaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemuneracaoCamaraSjcTabelaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
