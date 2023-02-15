import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaPacoComponent } from './hola-paco.component';

describe('HolaPacoComponent', () => {
  let component: HolaPacoComponent;
  let fixture: ComponentFixture<HolaPacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolaPacoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HolaPacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
