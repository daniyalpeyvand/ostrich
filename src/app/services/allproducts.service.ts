import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mocks/products';
import * as Interfaces from '../Interfaces/Products';
import * as Model from '../Models/Product';



@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

 public constructor() { }


 public getAllProducts() :Promise<Interfaces.Product[]>{

 return Promise.resolve(PRODUCTS);
 }
}
