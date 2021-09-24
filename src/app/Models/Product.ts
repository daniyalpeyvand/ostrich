import * as Interface from '../Interfaces/Products';

export class product implements Interface.Product {
    public constructor(){
      
    }
    public title : string;
    public id : number;
    public shortDescription? : string;
    public text? :string;
    public imageName? : string;
    public showSlider? : boolean;
    public Price : number;
    public tag : string;
}