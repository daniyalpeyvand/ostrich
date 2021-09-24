import { Injectable } from '@angular/core';
import * as Model from '../Models/Product';
import * as Interface from '../Interfaces/Products';
import {PRODUCTS} from '../mocks/products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public constructor() {}

  public getAllProducts() : Interface.Product[]{
     
    return PRODUCTS;
  }
  
}
