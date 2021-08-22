import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {faCar, faPlusCircle, faPlusSquare, faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {LocalService} from "../../services/local.service";
import {Local} from "../../models/local";
import {ToastrService} from "ngx-toastr";

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

  local: Local = null;

  constructor(
    private tokenService: TokenService,
    private localService: LocalService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.isLogged = true;
    }
    this.localService.detail(1).subscribe(
      data => {
        this.local = data;
      },
      error => {
        this.toastr.error(error.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-bottom-right',
        });
      }
    );
  }



}
