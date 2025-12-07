import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  showSearchModal = false;


   isFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 30;   // you can change threshold
  }
  
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
