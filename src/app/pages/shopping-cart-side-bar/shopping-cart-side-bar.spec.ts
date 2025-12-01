import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSideBar } from './shopping-cart-side-bar';

describe('ShoppingCartSideBar', () => {
  let component: ShoppingCartSideBar;
  let fixture: ComponentFixture<ShoppingCartSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartSideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
