import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
 
import { Loader } from "./shared/components/loader/loader";
declare var $: any;


@Component({
  selector: 'app-root',

  imports: [CommonModule, LayoutModule, SharedModule, RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-frontend');
  isHome = signal(false);
  loading: boolean = false;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event: any) => {

      // ROUTE START → SHOW LOADER
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.cdr.detectChanges();     // 👈 Force UI update immediately
      }

      // ROUTE END → HIDE LOADER
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();   // 👈 Fix UI freeze
        }, 100);
      }

      // Check if page is home
      if (event instanceof NavigationEnd) {
        this.isHome.set(event.urlAfterRedirects === '/home' || event.url === '/');
      }
    });
  }




}
