import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  showSearchModal = false;

  openSearchModal() {
    this.showSearchModal = true;
  }

  closeSearchModal() {
    this.showSearchModal = false;
  }

  showCart = false;

  openCart() {
    console.log('opened');
    
    this.showCart = true;
  }

  closeCart() {
    this.showCart = false;
  }

}
