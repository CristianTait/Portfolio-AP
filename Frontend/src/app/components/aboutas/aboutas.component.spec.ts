import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutasComponent } from './aboutas.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('AboutasComponent', () => {
  let component: AboutasComponent;
  let fixture: ComponentFixture<AboutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutasComponent ],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});