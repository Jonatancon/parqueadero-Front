import {Local} from "./local";

export class NewUser {
  dni: string;
  name: string;
  password: string;
  local: Local;

  constructor(dni: string, name: string, password: string, local: Local) {
    this.dni = dni;
    this.name = name;
    this.password = password;
    this.local = local;
  }
}
