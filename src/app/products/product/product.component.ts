import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  cateID: number;

  constructor(private productService: ProductserviceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.route.params.subscribe(param => {
      this.cateID = +param.cateid;
      this.productService.getProducts(this.cateID).subscribe(product => this.products = product ) 
    })
  }  

}
