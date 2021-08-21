import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private router: Router
  ) { }

  public setToken (token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken (): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    return !!this.getToken();

  }

  public getDni (): string {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payLoad = token.split('.')[1];
    const payLoadDecoded = atob(payLoad);
    const values = JSON.parse(payLoadDecoded);

    return values.sup;
  }

  public isAdmin (): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken();
    const payLoad = token.split('.')[1];
    const payLoadDecoded = atob(payLoad);
    const values = JSON.parse(payLoadDecoded);
    const roles = values.roles;

    return roles.indexOf('ROLE_ADMIN') >= 0;

  }

  public logOut (): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
