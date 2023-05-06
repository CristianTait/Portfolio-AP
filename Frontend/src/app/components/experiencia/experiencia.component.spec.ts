import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaComponent } from './experiencia.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ExperienciaComponent', () => {
  let component: ExperienciaComponent;
  let fixture: ComponentFixture<ExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaComponent ],
      imports: [ HttpClientModule ],
      providers: [
        HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: '0'
              }
            }
          }
        }
      ]
    }).compileComponents();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
