import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, output, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselComponent, SlickCarouselModule } from "ngx-slick-carousel";
import { Product } from '../../../models/product.model';
@Component({
  selector: 'app-product-modal',
  imports: [CommonModule, FormsModule, SlickCarouselModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css',
})
export class ProductModal {
  @Input() product!: Product;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  sizes = ['S', 'M', 'L', 'XL'];
  colors = ['Red', 'Blue', 'White', 'Grey', 'Black', 'Green', 'Pink', 'Purple'];

  selectedSize: string | null = null;
  selectedColor: string | null = null;
  quantity = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    console.log('Added to cart:', {
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: this.quantity
    });
  }

  constructor(private cd: ChangeDetectorRef) {

  }
  selectedIndex = 0;



  mainSliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    fade: true,
    cssEase: 'linear',
  };


  selectImage(i: any) {

    this.selectedIndex = i;
  }


  closModal() {
    this.closed.emit(true); // emit true when modal is closed
  }
  openFullscreen(elem: HTMLElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) { /* Safari */
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { /* IE11 */
      (elem as any).msRequestFullscreen();
    }
  }

  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) { /* Safari */
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) { /* IE11 */
      (document as any).msExitFullscreen();
    }
  }
}
