import {Local} from "./local";

export class NewUser {
  dni: string;
  name: string;
  password: string;
  local: Local;
  authorities: string[];
}
