export class Contract {

  private _id: number;
  private _value: number;
  private _name: string;


  constructor(id: number, value: number, name: string) {
    this._id = id;
    this._value = value;
    this._name = name;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
