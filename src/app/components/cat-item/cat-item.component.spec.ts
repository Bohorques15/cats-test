import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatItemComponent } from './cat-item.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CatItemComponent', () => {
  let component: CatItemComponent;
  let fixture: ComponentFixture<CatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatItemComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatItemComponent);
    component = fixture.componentInstance;
    component.cat = {
      "adaptability": 5,
      "affection_level": 5,
      "alt_names": "",
      "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
      "child_friendly": 3,
      "country_code": "EG",
      "country_codes": "EG",
      "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
      "dog_friendly": 4,
      "energy_level": 5,
      "experimental": 0,
      "grooming": 1,
      "hairless": 0,
      "health_issues": 2,
      "hypoallergenic": 0,
      "id": "abys",
      "image": {
        "height": 1445,
        "id": "0XYvRd7oD",
        "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        "width": 1204
      },
      "indoor": 0,
      "intelligence": 5,
      "lap": 1,
      "life_span": "14 - 15",
      "name": "Abyssinian",
      "natural": 1,
      "origin": "Egypt",
      "rare": 0,
      "reference_image_id": "0XYvRd7oD",
      "rex": 0,
      "shedding_level": 2,
      "short_legs": 0,
      "social_needs": 5,
      "stranger_friendly": 5,
      "suppressed_tail": 0,
      "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
      "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
      "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
      "vocalisation": 1,
      "weight": {
        "imperial": "7  -  10",
        "metric": "3 - 5"
      },
      "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
    };
    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });
});
