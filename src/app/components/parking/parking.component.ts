import { Component, OnInit } from '@angular/core';
import {faAddressCard, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {Cell} from "../../models/cell";
import {Parking} from "../../models/parking";
import {CarService} from "../../services/car.service";
import {CellService} from "../../services/cell.service";
import {ParkingService} from "../../services/parking.service";
import {ToastrService} from "ngx-toastr";
import {Car} from "../../models/car";
import {Router} from "@angular/router";
import {LocalService} from "../../services/local.service";
import {Local} from "../../models/local";

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  addresCard = faAddressCard;
  register = faClipboardCheck;

  dniCar: string;
  cellSelect: number;
  doSpace = true;

  cell: Cell[] = [];
  parking: Parking;
  car: Car = null;
  local: Local = null;

  constructor(
    private carService: CarService,
    private cellService: CellService,
    private parkingService: ParkingService,
    private toaster: ToastrService,
    private router: Router,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.loadCell();
    this.loadLocal();
  }

  loadCell(): void {
    this.cellService.all().subscribe(
      data => {
        this.cell = data;
      },
      error => {
        this.doSpace = false;
        this.toaster.error(`No hay Lugar En El Parqueadero`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }

  loadLocal(): void {
    this.localService.detail(1).subscribe(
      data => {
        this.local = data;
      }
    );
  }

  updateLocal(): void {
    this.cell[this.cellSelect - 1].ocupado = true;
    this.cellService.update(this.cell[this.cellSelect - 1]).subscribe();

    this.local.occupiedPlaces += 1;
    this.local.availableSpace -= 1;
    this.localService.update(this.local).subscribe();
  }

  registerParking(): void {
    this.parking = new Parking(null, this.car, this.cell[this.cellSelect-1], true);
    this.parkingService.save(this.parking).subscribe(
      data => {
        this.toaster.success(`Vehiculo agregado al parqueadero`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/']);
      },
      error => {
        this.toaster.error(error.error.message(), 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }

  onRegister(): void {
    const promise = new Promise((resolve) => {
      this.carService.detail(this.dniCar).subscribe(
        data => {
          resolve(this.car = data);
          this.car = data;
        },
        error => {
          this.toaster.error(`Vehiculo no registrado, por favor registrelo Registrarlo`, 'Fail', {
            timeOut: 3000, positionClass: 'toast-bottom-right'
          });
          this.router.navigate(['/detail-car']);
        }
      );
    });

    promise.then(() =>{
      this.registerParking();
      this.updateLocal();
    });
  }

}
