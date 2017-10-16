import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosdadosComponent } from './todosdados.component';

describe('TodosdadosComponent', () => {
  let component: TodosdadosComponent;
  let fixture: ComponentFixture<TodosdadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosdadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosdadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
