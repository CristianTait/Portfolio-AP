import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectosComponent } from './proyectos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ProyectosComponent', () => {
  let component: ProyectosComponent;
  let fixture: ComponentFixture<ProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosComponent ],
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
      declarations: [ ProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
