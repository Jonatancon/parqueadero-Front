import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {faCar, faMoneyCheck, faPlusCircle, faPlusSquare, faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {LocalService} from "../../services/local.service";
import {Local} from "../../models/local";
import {ToastrService} from "ngx-toastr";
import {ParkingService} from "../../services/parking.service";
import {Parking} from "../../models/parking";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../../layout/dialog-overview/dialog-overview.component";
import {Car} from "../../models/car";
import {Cell} from "../../models/cell";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  doCars = false;
  isLoad = false;

  plusSquare = faPlusSquare;
  money = faMoneyCheck;
  plusCircle = faPlusCircle;
  car = faCar;
  search = faSearchLocation;

  local: Local = new Local(0,0,0,0,0);
  parkingCars: Parking[] = [];

  constructor(
    private tokenService: TokenService,
    private localService: LocalService,
    private toastr: ToastrService,
    private parkingService: ParkingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.isLogged = true;
    }
    this.loadLocal();
    this.loadParking();
  }

  loadLocal(): void {
    this.localService.detail(1).subscribe(
      data => {
        this.local = data;
      }
    );
  }

  loadParking(): void {
    this.parkingService.allCarActives().subscribe(
      data => {
        this.parkingCars = data;
        this.doCars = true;
        this.isLoad = true;
      },
      error => {
        this.doCars = false;
        this.isLoad = false;
      }
    );
  }

  progressBar(): string {
    let result = (this.local.occupiedPlaces * 100) / this.local.totalPlaces;
    return result+"";
  }

  openDialog(parking: Parking): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '500px',
      data: parking
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  idPayParking(id:number):void {
    this.parkingService.idPay(id);
  }

}
