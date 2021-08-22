import {Owner} from "./owner";
import {Contract} from "./contract";

export class Car {
  dniCar: string;
  owner: Owner;
  contract: Contract;


  constructor(dniCar: string, owner: Owner, contract: Contract) {
    this.dniCar = dniCar;
    this.owner = owner;
    this.contract = contract;
  }

}
