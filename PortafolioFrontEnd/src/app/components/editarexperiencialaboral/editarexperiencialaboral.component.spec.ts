import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarexperiencialaboralComponent } from './editarexperiencialaboral.component';

describe('EditarexperiencialaboralComponent', () => {
  let component: EditarexperiencialaboralComponent;
  let fixture: ComponentFixture<EditarexperiencialaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarexperiencialaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarexperiencialaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
