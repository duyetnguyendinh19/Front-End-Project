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

  @Input() dataProduct: Product[];
  @Input() category: number;

  categorys: Category[];
  productcateid: number = 1;
  product: Product = new Product();

  constructor(private productServices: ProductserviceService, private categorySevice: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  // addProduct(){   
  //   this.productServices.addProduct(this.cateid,this.product).subscribe();
  //   this.product = new Product();
  // }

  addProduct(formAddProduct: NgModel){
    // console.log(formAddProduct)
    if(formAddProduct.valid){
      this.productServices.addProduct(this.productcateid,formAddProduct.value).subscribe(
        data => {if(this.productcateid == this.category ){
          this.dataProduct.push(data)
          }        
        }
      );     
    }   
    formAddProduct.reset(new Product());
  }

  getCategory(){
    this.categorySevice.getCategory().subscribe(cate => {this.categorys = cate});
  }

  selectCate(id){
    this.productcateid = id;   
  }
}
