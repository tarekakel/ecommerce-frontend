import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SearchCategory } from '../../../models/searchCategory';
import { CommonModule } from '@angular/common';
import { ProductModal } from "../product-modal/product-modal";

@Component({
  selector: 'app-product-overview',
  imports: [CommonModule, ProductModal],
  templateUrl: './product-overview.html',
  styleUrl: './product-overview.css',
})
export class ProductOverview {

  searchCategories: SearchCategory[] = [
    { name: 'All Products', filter: '*', order: 0 },
    { name: 'Women', filter: 'women', order: 1 },
    { name: 'Men', filter: 'men', order: 2 },
    { name: 'Bag', filter: 'bag', order: 3 },
    { name: 'Shoes', filter: 'shoes', order: 4 },
    { name: 'Watches', filter: 'watches', order: 5 }];
  products: Product[] = [
    { id: 1, name: "Esprit Ruffle Shirt", price: 16.64, category: "women", image: "assets/images/product-01.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 2, name: "Herschel Supply", price: 35.31, category: "women", image: "assets/images/product-02.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 3, name: "Only Check Trouser", price: 25.50, category: "men", image: "assets/images/product-03.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 4, name: "Classic Trench Coat", price: 75.00, category: "women", image: "assets/images/product-04.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 5, name: "Front Pocket Jumper", price: 34.75, category: "women", image: "assets/images/product-05.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 6, name: "Vintage Inspired Classic", price: 93.20, category: "watches", image: "assets/images/product-06.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 7, name: "Shirt in Stretch Cotton", price: 52.66, category: "women", image: "assets/images/product-07.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] },
    { id: 8, name: "Pieces Metallic Printed", price: 18.96, category: "women", image: "assets/images/product-08.jpg", images: ['assets/images/product-detail-01.jpg', 'assets/images/product-detail-02.jpg', 'assets/images/product-detail-03.jpg'] }
  ];

  showModal = false;
  selectedProduct: any;

  openModal(product: any) {

    this.selectedProduct = product;
    console.log('Product selectedProduct:', this.selectedProduct);
    this.showModal = true;
  }

  handleAdd(event: any) {
    console.log('Product added:', event);
    this.showModal = false;
  }

  selectedFilter: string = '*';
  searchTerm: string = '';
  filteredProducts: Product[] = [...this.products];

  // Toggle filter/search panels
  showFilterPanel: boolean = false;
  showSearchPanel: boolean = false;


  toggleFilterPanel() {
    this.showFilterPanel = !this.showFilterPanel;
  }

  toggleSearchPanel() {
    this.showSearchPanel = !this.showSearchPanel;
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  onSearchChange(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilter();
  }

  applyFilter() {
    this.filteredProducts = this.products
      .filter(p => this.selectedFilter === '*' || p.category === this.selectedFilter)
      .filter(p => p.name.toLowerCase().includes(this.searchTerm));
  }
}
