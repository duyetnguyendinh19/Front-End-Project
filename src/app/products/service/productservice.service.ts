import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private urlAPI = 'http://5ca5f52d3a08260014278d81.mockapi.io/api/v1/category';

  constructor(private Http: HttpClient) { }

  getProducts(cateID): Observable <Product[]> {  
    return this.Http.get<Product[]>(`${this.urlAPI}/${cateID}/product`);
  }

  addProduct(cateID,product): Observable <Product> {
    return this.Http.post<Product>(`${this.urlAPI}/${cateID}/product`, product);
  }

  editProduct(product): Observable <Product> {
    return this.Http.put<Product>(`${this.urlAPI}/${product.categoryId}/product/${product.id}`, product);
  }

  deleteProduct(product: Product): Observable <Product> {
    // this.newData = this.newData.filter(item => item.id !== id);
    // const id = typeof product === 'number' ? product : product.id;
    const urldelete = `${this.urlAPI}/${product.categoryId}/product/${product.id}`;
    return this.Http.delete<Product>(urldelete);
  }

  getProductDetail(id: number,cateID): Observable <Product>{
    // return this.newData.find(item=> item.id == id);
    const urlDetail = `${this.urlAPI}/${cateID}/product/${id}`;
    return this.Http.get<Product>(urlDetail);
  }

  searchProduct(term: string): Observable<Product[]> {
    const urlSearch = `${this.urlAPI}/?name=${term}`;
    console.log(urlSearch);
    if (!term.trim()) {
      return of([]);
    }
    return this.Http.get<Product[]>(urlSearch);
  }
}
