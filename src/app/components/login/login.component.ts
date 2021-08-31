import { Component, OnInit } from '@angular/core';
import {LoginUser} from "../../models/login-user";
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginUser;
  dni: string;
  password: string;
  errorMessaje: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.dni, this.password);
    this.authService.loginUser(this.loginUser).subscribe(
      data => {
        this.tokenService.setToken(data.token);

        this.toaster.success(`Bienvenido`, 'Ingreso Correcto', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessaje = err.error.message;
        this.toaster.error(`Usuario ${this.errorMessaje}`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }
}
