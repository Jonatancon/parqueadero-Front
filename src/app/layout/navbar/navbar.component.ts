import { Component, OnInit } from '@angular/core';
import {faArrowAltCircleRight, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logout = faArrowAltCircleRight;
  login = faClipboardCheck;

  isLogged = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  onLogout(): void {
    this.tokenService.logOut();
  }

}
