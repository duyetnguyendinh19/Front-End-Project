import { Component, OnInit, Input } from '@angular/core';
import { DefaultIterableDifferFactory } from '@angular/core/src/change_detection/change_detection';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() dataEdit;

  constructor(private productServices: ProductserviceService) { }

  ngOnInit() {
  }

  saveData(){
    this.productServices.editProduct(this.dataEdit).subscribe();
    console.log(this.dataEdit);
  }
}
