import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../product/product';
import { CategoryserviceService } from 'src/app/category/services/categoryservice.service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-product-contact',
  templateUrl: './product-contact.component.html',
  styleUrls: ['./product-contact.component.css']
})
export class ProductContactComponent implements OnInit {

  nameProduct: String;
  productdelete: Product;
  productSelected: Product;
  products: Product[];
  categorys: Category[];

  constructor(private productService: ProductserviceService, private categoryService: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
    this.getProducts(1);
  }

  getCategory(){
    this.categoryService.getCategory().subscribe(data => {this.categorys = data});
  }

  getProducts(id){
    this.productService.getProducts(id).subscribe(product => this.products = product);
    
  }  

  onEdit(product){
    this.productSelected = product;
  }

  onDelete(product){
    this.productdelete = product;
    this.nameProduct = product.name;
  }

  onDeleteAction(){
    this.productService.deleteProduct(this.productdelete).subscribe(data => (this.products = this.products.filter(item => item.id !== data.id))); 
  }

}
