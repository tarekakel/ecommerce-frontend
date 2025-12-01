
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-side-bar',
  standalone:false,
  templateUrl: './shopping-cart-side-bar.html',
  styleUrl: './shopping-cart-side-bar.css',
})
export class ShoppingCartSideBar {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  hideCart() {
    this.close.emit();
  }
}
