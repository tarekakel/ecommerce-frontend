import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {

  banners = [
    {
      img: 'assets/images/banner-01.jpg',
      name: 'Women',
      info: 'Spring 2018',
      link: 'product.html'
    },
    {
      img: 'assets/images/banner-02.jpg',
      name: 'Men',
      info: 'Spring 2018',
      link: 'product.html'
    },
    {
      img: 'assets/images/banner-03.jpg',
      name: 'Accessories',
      info: 'New Trend',
      link: 'product.html'
    }
  ];

}
