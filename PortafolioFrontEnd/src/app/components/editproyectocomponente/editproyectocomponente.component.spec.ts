import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyectocomponenteComponent } from './editproyectocomponente.component';

describe('EditproyectocomponenteComponent', () => {
  let component: EditproyectocomponenteComponent;
  let fixture: ComponentFixture<EditproyectocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyectocomponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproyectocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
