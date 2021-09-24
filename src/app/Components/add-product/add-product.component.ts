import { Component, OnInit } from '@angular/core';

import * as Interface from '../../Interfaces/Products';
import * as Model from '../../Models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public constructor() {
    
    this.product = new Model.product();
   }

  public product : Interface.Product;
  ngOnInit(): void {
  }
  public onSubmit() {

  }

}
