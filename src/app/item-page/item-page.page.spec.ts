import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPagePage } from './item-page.page';

describe('ItemPagePage', () => {
  let component: ItemPagePage;
  let fixture: ComponentFixture<ItemPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
