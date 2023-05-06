import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditareducacionComponent } from './editareducacion.component';

describe('EditareducacionComponent', () => {
  let component: EditareducacionComponent;
  let fixture: ComponentFixture<EditareducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditareducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditareducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
