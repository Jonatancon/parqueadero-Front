import {Car} from "./car";
import {Cell} from "./cell";

export class Parking {

  id: number;
  car: Car;
  cell: Cell;
  startDate: string;
  finalDate: string;
  active: boolean;


  constructor(id: number, car: Car, cell: Cell, active: boolean) {
    this.id = id;
    this.car = car;
    this.cell = cell;
    this.active = active;
  }
}
