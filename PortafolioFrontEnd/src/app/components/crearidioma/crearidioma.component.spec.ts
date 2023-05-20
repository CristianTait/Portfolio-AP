import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearidiomaComponent } from './crearidioma.component';

describe('CrearidiomaComponent', () => {
  let component: CrearidiomaComponent;
  let fixture: ComponentFixture<CrearidiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearidiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearidiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
