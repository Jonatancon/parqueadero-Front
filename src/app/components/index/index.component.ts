import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {faCar, faPlusCircle, faPlusSquare, faSearchLocation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  plusSquare = faPlusSquare;
  plusCircle = faPlusCircle;
  car = faCar;
  search = faSearchLocation;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.isLogged = true;
    }
  }

}
