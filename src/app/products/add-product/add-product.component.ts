import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product/product';
import { ProductserviceService } from '../service/productservice.service';
import { CategoryserviceService } from 'src/app/category/services/categoryservice.service';
import { Category } from 'src/app/category/category';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() dataProduct;

  product: Product = new Product();
  categorys: Category[];
  cateid: number;

  constructor(private productServices: ProductserviceService, private categorySevice: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  // addProduct(){   
  //   this.productServices.addProduct(this.cateid,this.product).subscribe();
  //   this.product = new Product();
  // }

  addProduct(formAddProduct: NgModel){
    if(formAddProduct.valid){
      this.productServices.addProduct(this.cateid,formAddProduct.value).subscribe();
    }
    formAddProduct.reset();
  }

  getCategory(){
    this.categorySevice.getCategory().subscribe(data => {this.categorys = data});
  }

  selectCate(id){
    this.cateid = id;
  }
}
