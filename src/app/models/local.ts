export class Local {
  private _id: number;
  private _availableSpace: number;
  private _reservedPlaces: number;
  private _occupiedPlaces: number;
  private _totalPlaces: number;


  constructor(id: number, availableSpace: number, reservedPlaces: number,
              occupiedPlaces: number, totalPlaces: number) {
    this._id = id;
    this._availableSpace = availableSpace;
    this._reservedPlaces = reservedPlaces;
    this._occupiedPlaces = occupiedPlaces;
    this._totalPlaces = totalPlaces;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get availableSpace(): number {
    return this._availableSpace;
  }

  set availableSpace(value: number) {
    this._availableSpace = value;
  }

  get reservedPlaces(): number {
    return this._reservedPlaces;
  }

  set reservedPlaces(value: number) {
    this._reservedPlaces = value;
  }

  get occupiedPlaces(): number {
    return this._occupiedPlaces;
  }

  set occupiedPlaces(value: number) {
    this._occupiedPlaces = value;
  }

  get totalPlaces(): number {
    return this._totalPlaces;
  }

  set totalPlaces(value: number) {
    this._totalPlaces = value;
  }
}
