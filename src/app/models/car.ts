import {Owner} from "./owner";
import {Contract} from "./contract";

export class Car {
  private _dniCar: string;
  private _owner: Owner;
  private _contract: Contract;


  constructor(dniCar: string, owner: Owner, contract: Contract) {
    this._dniCar = dniCar;
    this._owner = owner;
    this._contract = contract;
  }


  get dniCar(): string {
    return this._dniCar;
  }

  set dniCar(value: string) {
    this._dniCar = value;
  }

  get owner(): Owner {
    return this._owner;
  }

  set owner(value: Owner) {
    this._owner = value;
  }

  get contract(): Contract {
    return this._contract;
  }

  set contract(value: Contract) {
    this._contract = value;
  }
}
