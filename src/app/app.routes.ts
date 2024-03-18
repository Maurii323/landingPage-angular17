import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "products", component: ProductsComponent},
    {path: "products/:id", component: ProductsDetailsComponent},
    {path: "**", redirectTo:"", pathMatch: "full"}
];
