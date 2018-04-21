import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemuneracaoCardComponent } from './remuneracao-card.component';

describe('RemuneracaoCardComponent', () => {
  let component: RemuneracaoCardComponent;
  let fixture: ComponentFixture<RemuneracaoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemuneracaoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemuneracaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
