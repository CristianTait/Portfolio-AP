import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhabilidadblandaComponent } from './crearhabilidadblanda.component';

describe('CrearhabilidadblandaComponent', () => {
  let component: CrearhabilidadblandaComponent;
  let fixture: ComponentFixture<CrearhabilidadblandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearhabilidadblandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearhabilidadblandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
