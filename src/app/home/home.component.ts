import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../products/service/productservice.service';
import { Product } from '../products/product/product';
import { Category } from '../category/category';
import { CategoryserviceService } from '../category/services/categoryservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  categorys: Category[];

  constructor(
    private productService: ProductserviceService,
    private categoryService: CategoryserviceService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.categoryService.getCategory().subscribe(cate => {this.categorys = cate;
      for (var i=1;i <= this.categorys.length;i++) {
        this.productService.getProducts(i).subscribe(product => 
        {if(product.length>0){
            this.products = product
          }  
        })
      }
    })
    
  }  

}
