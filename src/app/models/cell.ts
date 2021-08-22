export class Cell {
  private _id: number;
  private _condition: boolean;
  private _reserved: boolean;


  constructor(id: number, condition: boolean, reserved: boolean) {
    this._id = id;
    this._condition = condition;
    this._reserved = reserved;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get condition(): boolean {
    return this._condition;
  }

  set condition(value: boolean) {
    this._condition = value;
  }

  get reserved(): boolean {
    return this._reserved;
  }

  set reserved(value: boolean) {
    this._reserved = value;
  }
}
