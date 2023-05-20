import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareducacionComponent } from './creareducacion.component';

describe('CreareducacionComponent', () => {
  let component: CreareducacionComponent;
  let fixture: ComponentFixture<CreareducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreareducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreareducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
