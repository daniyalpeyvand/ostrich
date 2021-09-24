import { Component, EventEmitter } from '@angular/core';
import {ProductsService} from './services/products.service';
import * as Interface from './Interfaces/Products';
import { SaleService } from './services/sale.service';


@Component({
  selector: '.Headers',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private productService : ProductsService){
    this.search = "جستجو برای محصولات";

    this.languages = ["فارسی" , "English"];
    this.selectedLanguages = "aaa";


    this.productList = 
      productService.getAllProducts();
  }

 
  
 
  public languages : string[];
  public search : string;
  public selectedLanguages : string;

  public productList : Interface.Product[];

  public searchClick(){


  }
}

