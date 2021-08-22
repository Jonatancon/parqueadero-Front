export class Owner {

  private _dni: string;
  private _name: string;


  constructor(dni: string, name: string) {
    this._dni = dni;
    this._name = name;
  }


  get dni(): string {
    return this._dni;
  }

  set dni(value: string) {
    this._dni = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
