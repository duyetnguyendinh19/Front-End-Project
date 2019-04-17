import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../product/product';
import { CategoryserviceService } from 'src/app/category/services/categoryservice.service';
import { Category } from 'src/app/category/category';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() dataEdit;
  @Input() dataProduct: Product[];
  @Input() category: number;
  @ViewChild('closeModalEdit') closeModalEdit: ElementRef;
  products: Product[];
  categorys: Category[];

  constructor(private productServices: ProductserviceService,private categorySevice: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.categorySevice.getCategory().subscribe(cate => {this.categorys = cate});
  }

  // saveData(){
  //   this.productServices.editProduct(this.dataEdit).subscribe( data =>
  //     {
  //       if(data.categoryId !== this.category){   
  //        this.dataProduct = this.dataProduct.filter(item => (item.id !== data.id));
  //       }
  //     }
  //   );
  // }

  editProduct(formEditProduct: NgModel){
    // console.log(formAddProduct)
    if(formEditProduct.valid){
      this.productServices.editProduct(formEditProduct.value).subscribe(
        data => {
          if(data.categoryId !== this.category){   
            this.products = this.dataProduct.filter(item => (item.id !== data.id));
            this.dataProduct.length = 0;
            for (const product of this.products) {
              this.dataProduct.push(product);
            }
          } 
        }
      );  
      this.closeModalEdit.nativeElement.click()   
    }else{
      alert('Edit Failed')
    }    
  }
}
