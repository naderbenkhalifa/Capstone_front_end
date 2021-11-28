import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFoundComponent } from './food-found.component';

describe('FoodFoundComponent', () => {
  let component: FoodFoundComponent;
  let fixture: ComponentFixture<FoodFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
