import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoHiComponent } from './paco-hi.component';

describe('PacoHiComponent', () => {
  let component: PacoHiComponent;
  let fixture: ComponentFixture<PacoHiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacoHiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PacoHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
