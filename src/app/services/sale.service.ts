import { Injectable } from '@angular/core';
import * as Interface from '../Interfaces/Products';
import * as Model from '../Models/Product';
import {PRODUCTS} from '../mocks/products';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  public constructor() { }

  public getAllSale() : Promise<Interface.Product[]>{
     
    return Promise.resolve(PRODUCTS);
  }
}
