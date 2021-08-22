import { Component, OnInit } from '@angular/core';
import {faAddressCard, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Owner} from "../../models/owner";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  register = faClipboardCheck;
  addresCard = faAddressCard;

  dni: string;
  name: string;
  owner: Owner;
  errorMessage: string;

  constructor(
    private router: Router,
    private toaster: ToastrService,
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.owner = new Owner(this.dni, this.name);
    this.ownerService.create(this.owner).subscribe(
      data => {
        this.toaster.success(`Propietario Guardado`, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = error.error.message;
        this.toaster.error(`${this.errorMessage}`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }

}
