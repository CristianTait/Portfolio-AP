import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhabilidadesblandasComponent } from './editarhabilidadesblandas.component';

describe('EditarhabilidadesblandasComponent', () => {
  let component: EditarhabilidadesblandasComponent;
  let fixture: ComponentFixture<EditarhabilidadesblandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhabilidadesblandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarhabilidadesblandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
