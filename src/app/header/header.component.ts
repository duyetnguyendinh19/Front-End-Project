import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Product } from '../products/product/product';
import { ProductserviceService } from '../products/service/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductserviceService) { }

  search(term: string){
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.products = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), switchMap(term => this.productService.searchProduct(term)));
  }


}
