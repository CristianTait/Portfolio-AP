import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearexplabComponent } from './crearexplab.component';

describe('CrearexplabComponent', () => {
  let component: CrearexplabComponent;
  let fixture: ComponentFixture<CrearexplabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearexplabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearexplabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
