import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from './services/categoryservice.service';
import { Category } from './category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys: Category[];
  constructor(private categorySevice: CategoryserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    this.categorySevice.getCategory().subscribe(data => {this.categorys = data});
  }

}
