import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedesComponent } from './redes.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('RedesComponent', () => {
  let component: RedesComponent;
  let fixture: ComponentFixture<RedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesComponent ],
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
      declarations: [ RedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
