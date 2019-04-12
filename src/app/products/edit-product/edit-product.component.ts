import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../product/product';
import { CategoryserviceService } from 'src/app/category/services/categoryservice.service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() dataEdit;
  @Input() dataShowProduct: Product[];
  @Input() cateId: number;
  categorys: Category[];

  constructor(private productServices: ProductserviceService,private categorySevice: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.categorySevice.getCategory().subscribe(cate => {this.categorys = cate});
  }

  saveData(){
    this.productServices.editProduct(this.dataEdit).subscribe( data =>
      {
        if(data.categoryId !== this.cateId){
          console.log(this.dataShowProduct)
          console.log(this.dataShowProduct.filter(item => {item.id !== data.id}))
        }
      }
    );
  }
}
