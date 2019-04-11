import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductserviceService } from '../service/productservice.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  detailProduct: Product;
  products: Product[];
  

  constructor(
    private route: ActivatedRoute, 
    private productServices: ProductserviceService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getProductDetail();
    this.getProducts();
  }

  goBack(){
    this.location.back();
  }

  getProductDetail(){
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.productServices.getProductDetail(id).subscribe(item => this.detailProduct = item);
    this.route.params.subscribe(param => {
      const cateID = +param.cateid; const id = +param.id
      this.productServices.getProductDetail(id,cateID).subscribe(item => this.detailProduct = item)
    })

  }

  getProducts(){
    this.route.params.subscribe(param => {
      const cateID = +param.cateid;
      this.productServices.getProducts(cateID).subscribe(product => this.products = product ) 
    })
  }


}
