import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  collapsed = false;


  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {


  }
  // slides = [
  //   { img: 'assets/images/slide-01.jpg', },
  //   { img: 'assets/images/slide-02.jpg' },
  //   { img: 'assets/images/slide-03.jpg' },

  // ];
  // slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  // addSlide() {
  //   this.slides.push({ img: "http://placehold.it/350x150/777777" })
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }


  slides = [
    {
      img: 'assets/images/slide-01.jpg',
      title: 'Women Collection 2018',
      subtitle: 'NEW SEASON',
      appear1: 'fadeInDown',
      appear2: 'fadeInUp',
      appear3: 'zoomIn',
      active: false
    },
    {
      img: 'assets/images/slide-02.jpg',
      title: 'Men New-Season',
      subtitle: 'Jackets & Coats',
      appear1: 'rollIn',
      appear2: 'lightSpeedIn',
      appear3: 'slideInUp',
      active: false
    },
    {
      img: 'assets/images/slide-03.jpg',
      title: 'Men Collection 2018',
      subtitle: 'New arrivals',
      appear1: 'rotateInDownLeft',
      appear2: 'rotateInUpRight',
      appear3: 'rotateIn',
      active: false
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    fade: true,
    cssEase: 'linear',

  };
  slickInit(e: any) {

    this.slides[0].active = true;
    this.cd.detectChanges();

  }

  afterChange(e: any) {
    this.slides.forEach((s, i) => s.active = (i === e.currentSlide));
  }


}
