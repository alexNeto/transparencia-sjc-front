import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCargoComponent } from './por-cargo.component';

describe('PorCargoComponent', () => {
  let component: PorCargoComponent;
  let fixture: ComponentFixture<PorCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
