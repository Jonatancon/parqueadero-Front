import {Car} from "./car";
import {Cell} from "./cell";

export class Parking {

  private _id: number;
  private _car: Car;
  private _cell: Cell;
  private _startDate: string;
  private _finalDate: string;
  private _active: boolean;


  constructor(id: number, car: Car, cell: Cell, active: boolean) {
    this._id = id;
    this._car = car;
    this._cell = cell;
    this._active = active;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get car(): Car {
    return this._car;
  }

  set car(value: Car) {
    this._car = value;
  }

  get cell(): Cell {
    return this._cell;
  }

  set cell(value: Cell) {
    this._cell = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get finalDate(): string {
    return this._finalDate;
  }

  set finalDate(value: string) {
    this._finalDate = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }
}
