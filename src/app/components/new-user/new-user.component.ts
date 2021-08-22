import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NewUser} from "../../models/new-user";
import {Local} from "../../models/local";
import {ToastrService} from "ngx-toastr";
import {faClipboardCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  register = faClipboardCheck;

  newUser: NewUser;
  dni: string;
  name: string;
  local: Local;
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

  onRegister(): void {
    this.newUser = new NewUser(this.dni, this.name, this.password, this.local);
    this.authService.newUser(this.newUser).subscribe(
      data => {
        this.toaster.success(`${data.message()}`, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessaje = err.error.message;
        this.toaster.success(`${this.errorMessaje}`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }

}
