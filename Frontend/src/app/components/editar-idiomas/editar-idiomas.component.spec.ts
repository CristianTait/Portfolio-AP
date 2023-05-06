import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIdiomasComponent } from './editar-idiomas.component';

describe('EditarIdiomasComponent', () => {
  let component: EditarIdiomasComponent;
  let fixture: ComponentFixture<EditarIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarIdiomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
