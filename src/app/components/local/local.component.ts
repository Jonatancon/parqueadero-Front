import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Router} from "@angular/router";
import {Local} from "../../models/local";
import {faAddressCard, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {ToastrService} from "ngx-toastr";
import {Cell} from "../../models/cell";
import {CellService} from "../../services/cell.service";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  isLoad = false;

  local: Local = null;
  newCupos: number;
  cell: Cell;

  addresCard = faAddressCard;
  register = faClipboardCheck;

  constructor(
    private localService: LocalService,
    private router: Router,
    private toaster: ToastrService,
    private cellService: CellService
  ) { }

  ngOnInit(): void {
    this.loadLocal();
  }

  loadLocal(): void {
    this.localService.detail(1).subscribe(
      data => {
        this.local = data;
        this.isLoad = true;
      }
    );
  }

  onRegister(): void {
    if (this.local.occupiedPlaces > this.newCupos) {
      this.toaster.error(`No se puede cambiar, Hay muchos vehiculos en el parqueadero`, 'Fail', {
        timeOut: 3000, positionClass: 'toast-bottom-right'
      });
    }else if (this.local.reservedPlaces > this.newCupos) {
      this.toaster.error(`No se puede cambiar hay muchos cupos reservados`, 'Fail', {
        timeOut: 3000, positionClass: 'toast-bottom-right'
      });
    }else {
      this.local.totalPlaces = this.newCupos;
      this.local.availableSpace = this.newCupos - this.local.occupiedPlaces;
      this.localService.update(this.local).subscribe(
        data => {
          this.addCell(this.newCupos);
          this.toaster.success(`Parqueadero Actualizado`, 'OK', {
            timeOut: 3000, positionClass: 'toast-bottom-right'
          });
          this.router.navigate(['/']);
        }
      );
    }
  }

  addCell(cant: number): void {
    if (cant > this.local.totalPlaces) {
      for (var i = 0; i < cant - this.local.totalPlaces; i++) {
        this.cell = new Cell(null, false, false);
        this.cellService.update(this.cell).subscribe();
      }
    }
  }

}
