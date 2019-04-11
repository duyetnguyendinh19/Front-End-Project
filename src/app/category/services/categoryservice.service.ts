import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private urlAPI = 'http://5ca5f52d3a08260014278d81.mockapi.io/api/v1/category';

  constructor(
    private Http: HttpClient,  
    ) { }

  getCategory(): Observable<Category[]>{
    return this.Http.get<Category[]>(this.urlAPI);
  }

}
