import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductComponent } from './products/product/product.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { ProductContactComponent } from './products/product-contact/product-contact.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { PaginationComponent } from './main/pagination/pagination.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    NotfoundComponent,
    AddProductComponent,
    ProductDetailComponent,
    ProductComponent,
    CarouselComponent,
    ProductContactComponent,
    EditProductComponent,
    PaginationComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
