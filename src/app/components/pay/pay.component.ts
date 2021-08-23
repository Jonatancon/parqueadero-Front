import {Component, OnInit} from '@angular/core';
import {ParkingService} from "../../services/parking.service";
import {Parking} from "../../models/parking";
import {LocalService} from "../../services/local.service";
import {Local} from "../../models/local";
import {Cell} from "../../models/cell";
import {CellService} from "../../services/cell.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  parking: Parking = null;
  local: Local = null;
  cell: Cell = null;

  valor: number;
  minutes: number;
  done = false;

  constructor(
    private parkingService: ParkingService,
    private localService: LocalService,
    private cellService: CellService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadParking();
    this.localService.detail(1).subscribe(
      data => {
        this.local = data;
      }
    );
  }

  loadParking(): void {
    this.parkingService.carActive(this.parkingService.idPago).subscribe(
      data => {
        this.parking = data;
        this.loadFactura();
      }
    );
  }

  loadFactura(): void {
    this.parkingService.update(this.parking).subscribe(
      data => {
        this.minutes = data.message.split(':')[0];
        this.valor = data.message.split(':')[1];
        this.againLoadParking();
      }
    );
  }

  updateLocal(): void {
    this.local.occupiedPlaces -= 1;
    this.local.availableSpace += 1;
    this.localService.update(this.local).subscribe();

    this.updateCell();
  }

  updateCell(): void {
    this.cell = new Cell(this.parking.cell.id, false, this.parking.cell.reserved);

    this.cellService.update(this.cell).subscribe(
      data => {
        this.router.navigate(['/']);
      }
    );
  }

  againLoadParking(): void {
    this.parkingService.carActive(this.parkingService.idPago).subscribe(
      data => {
        this.parking = data;
        this.done = true;
      }
    );
  }


}
