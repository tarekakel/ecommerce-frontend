import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: false,
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BactToTop {

  isVisible = false;

  // Listen to window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollY > 200; // show after 200px
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
