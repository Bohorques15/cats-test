import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatInfoComponent } from './cat-info.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { CatInfo } from '../../models';

describe('CatInfoComponent', () => {
  let component: CatInfoComponent;
  let fixture: ComponentFixture<CatInfoComponent>;
  let route: ActivatedRoute; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatInfoComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInfoComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

});
