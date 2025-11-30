import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { LayoutModule } from '../../../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ProductOverview } from '../../../pages/product/product-overview/product-overview';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ProductOverview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
