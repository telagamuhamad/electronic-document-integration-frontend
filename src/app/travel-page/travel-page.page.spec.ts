import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelPagePage } from './travel-page.page';

describe('TravelPagePage', () => {
  let component: TravelPagePage;
  let fixture: ComponentFixture<TravelPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
