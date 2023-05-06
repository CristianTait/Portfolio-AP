import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDatosComponentComponent } from './editar-datos-component.component';

describe('EditarDatosComponentComponent', () => {
  let component: EditarDatosComponentComponent;
  let fixture: ComponentFixture<EditarDatosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDatosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
