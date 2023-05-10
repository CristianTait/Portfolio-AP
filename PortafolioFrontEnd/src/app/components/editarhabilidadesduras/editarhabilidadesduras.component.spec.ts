import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhabilidadesdurasComponent } from './editarhabilidadesduras.component';

describe('EditarhabilidadesdurasComponent', () => {
  let component: EditarhabilidadesdurasComponent;
  let fixture: ComponentFixture<EditarhabilidadesdurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhabilidadesdurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarhabilidadesdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
