import { Routes } from '@angular/router';
import { ProductOverview } from './pages/product/product-overview/product-overview';
import { Home } from './shared/components/home/home';

import { ShoppingCart } from './pages/shopping-cart/shopping-cart';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';
import { Blog } from './pages/blog/blog';
import { BlogDetails } from './pages/blog-details/blog-details';

export const routes: Routes = [
    { path: 'home', component: Home },        // explicit /home
    { path: 'products', component: ProductOverview }, // optional alias
    { path: 'shoping-cart', component: ShoppingCart },
    { path: 'about', component: About },
    { path: 'contact-us', component: ContactUs },
    { path: 'blog', component: Blog },
    { path: 'blog-detail', component: BlogDetails },

    // Wildcard route: catch-all
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


