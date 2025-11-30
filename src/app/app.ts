import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ProductOverview } from "./pages/product/product-overview/product-overview";
import { Home } from "./shared/components/home/home";
declare var $: any;


@Component({
  selector: 'app-root',

  imports: [CommonModule, LayoutModule, SharedModule, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-frontend');



}
