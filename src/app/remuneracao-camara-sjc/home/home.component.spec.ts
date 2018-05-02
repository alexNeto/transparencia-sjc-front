import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuneracaoCamaraSjcComponent } from './remuneracao-camara-sjc.component';

describe('RemuneracaoCamaraSjcComponent', () => {
  let component: RemuneracaoCamaraSjcComponent;
  let fixture: ComponentFixture<RemuneracaoCamaraSjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemuneracaoCamaraSjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemuneracaoCamaraSjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
