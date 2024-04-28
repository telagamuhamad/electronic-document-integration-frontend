import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarPagePage } from './car-page.page';

describe('CarPagePage', () => {
  let component: CarPagePage;
  let fixture: ComponentFixture<CarPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
