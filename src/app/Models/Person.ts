import * as Interface from '../Interfaces/Person';

export class Person implements Interface.Person {

    public constructor(){

        this.fullName = null;
        this.id = 0;
        this.userName = null;
        this.password = null;

    }

    public id: number;
    public fullName: string;
    public emailAdress: string;
    public age?: number;
    public userName: string;
    public password: string;

}