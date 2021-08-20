import { Component, OnInit } from '@angular/core';
import {LoginUser} from "../../models/login-user";
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  dni: string;
  password: string;
  roles: string[] = [];
  errorMessaje: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.dni, this.password);
    this.authService.loginUser(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setDni(data.dni);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMessaje = err.error.message;
        console.log(err.error.message);
      }
    );
  }

}
