import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { Banner } from './banner/banner';


@NgModule({
  declarations: [
    Header,
    Sidebar,
    Footer,
    Banner
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    FormsModule
  ],
  exports: [
    Header,
    Sidebar,
    Footer,
    Banner,
    SlickCarouselModule
  ]
})
export class LayoutModule { }
