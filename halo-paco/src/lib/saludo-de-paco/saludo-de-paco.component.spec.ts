import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoDePacoComponent } from './saludo-de-paco.component';

describe('SaludoDePacoComponent', () => {
  let component: SaludoDePacoComponent;
  let fixture: ComponentFixture<SaludoDePacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaludoDePacoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaludoDePacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
