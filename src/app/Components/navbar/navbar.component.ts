import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import * as Interface from '../../Interfaces/Products';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public constructor(private productService : ProductsService) {
    this.productList = 
    productService.getAllProducts();
   }

  ngOnInit(): void {
  }
  public productList : Interface.Product[];
}
