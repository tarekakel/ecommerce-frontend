import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ProductOverview } from "./pages/product/product-overview/product-overview";
import { Home } from "./shared/components/home/home";
import { filter } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-root',

  imports: [CommonModule, LayoutModule, SharedModule, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-frontend');
  isHome = signal(false);
 constructor(private router: Router) {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    )
    .subscribe((event: any) => {
      this.isHome.set(event.urlAfterRedirects === '/home' || event.url === '/');
    });
  }


}
