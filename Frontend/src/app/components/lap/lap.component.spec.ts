import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAPComponent } from './lap.component';

describe('LAPComponent', () => {
  let component: LAPComponent;
  let fixture: ComponentFixture<LAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
