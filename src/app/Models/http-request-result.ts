export class HttpRequestResult <T> {

    public constructor () { }
    
    public data : T ;

    public isSucces : boolean;

    public errorMessages : string[];
    public hiddenMessages : string[];
    public informationMessages : string[];
}