import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Banner } from './banner/banner';
import { ShoppingCartSideBar } from '../pages/shopping-cart-side-bar/shopping-cart-side-bar';


@NgModule({
  declarations: [
    Header,
    Sidebar,
    Footer,
    Banner,
    ShoppingCartSideBar
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    Header,
    Sidebar,
    Footer,
    Banner,
    SlickCarouselModule,
    ShoppingCartSideBar
  ]
})
export class LayoutModule { }
