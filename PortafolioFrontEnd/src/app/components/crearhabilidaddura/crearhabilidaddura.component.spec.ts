import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhabilidadduraComponent } from './crearhabilidaddura.component';

describe('CrearhabilidadduraComponent', () => {
  let component: CrearhabilidadduraComponent;
  let fixture: ComponentFixture<CrearhabilidadduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearhabilidadduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearhabilidadduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
