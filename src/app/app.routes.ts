import { Routes } from '@angular/router';
import { ProductOverview } from './pages/product/product-overview/product-overview';
import { Home } from './shared/components/home/home';
import { App } from './app';

export const routes: Routes = [
    { path: 'home', component: Home },        // explicit /home
    { path: 'products', component: ProductOverview }, // optional alias
    { path: '', component: Home },            // default homepage

    // Wildcard route: catch-all
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


