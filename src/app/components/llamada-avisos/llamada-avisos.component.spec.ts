import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaAvisosComponent } from './llamada-avisos.component';

describe('LlamadaAvisosComponent', () => {
  let component: LlamadaAvisosComponent;
  let fixture: ComponentFixture<LlamadaAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamadaAvisosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamadaAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
