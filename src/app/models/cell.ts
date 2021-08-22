export class Cell {
  id: number;
  ocupado: boolean;
  reserved: boolean;


  constructor(id: number, ocupado: boolean, reserved: boolean) {
    this.id = id;
    this.ocupado = ocupado;
    this.reserved = reserved;
  }

}
