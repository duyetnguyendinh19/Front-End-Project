import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductContactComponent } from './products/product-contact/product-contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'category/:cateid/product' , component: ProductComponent},
  { path: 'category/:cateid/product/:id', component: ProductDetailComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'contact' , component: ProductContactComponent},
  { path: 'notfound' , component: NotfoundComponent},
  { path: '**', redirectTo: '/notfound', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
