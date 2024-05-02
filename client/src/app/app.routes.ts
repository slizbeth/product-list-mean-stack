import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-listcomponent';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
    { path:'', component: ProductListComponent },
    { path:'create-product', component: CreateProductComponent },
    { path:'modify-product/:id', component: CreateProductComponent },
    { path:'**', redirectTo: '', pathMatch: 'full' }
];
