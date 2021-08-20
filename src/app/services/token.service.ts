import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const DNI_KEY = 'AuthDni';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken (token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken (): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setDni (dni: string): void {
    window.sessionStorage.removeItem(DNI_KEY);
    window.sessionStorage.setItem(DNI_KEY, dni);
  }

  public getDni (): string {
    return sessionStorage.getItem(DNI_KEY);
  }

  public setAuthorities (authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities (): string[] {
    this.roles = [];

    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority)
      });
    }
    return this.roles;
  }

  public logOut (): void {
    window.sessionStorage.clear();
  }
}
