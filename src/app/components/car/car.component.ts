import { Component, OnInit } from '@angular/core';
import {faAddressCard, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {Owner} from "../../models/owner";
import {Contract} from "../../models/contract";
import {ContractService} from "../../services/contract.service";
import {OwnerService} from "../../services/owner.service";
import {ToastrService} from "ngx-toastr";
import {CellService} from "../../services/cell.service";
import {Cell} from "../../models/cell";
import {CarService} from "../../services/car.service";
import {Car} from "../../models/car";
import {Router} from "@angular/router";
import {LocalService} from "../../services/local.service";
import {Local} from "../../models/local";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  addresCard = faAddressCard;
  register = faClipboardCheck;

  contract: Contract[] = [new Contract(0,0,""), new Contract(0,0,"")];
  cell: Cell[] = [];
  owner: Owner = null;
  local: Local = null;
  car: Car;

  dniCar: string;
  dniOwner: string;
  contractSelect: number;
  cellSelect: number = null;


  constructor(
    private router: Router,
    private contractService: ContractService,
    private ownerService: OwnerService,
    private toaster: ToastrService,
    private cellService: CellService,
    private carService: CarService,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.loadCellActive();
    this.loadContract();
    this.loadLocal();
  }

  loadContract(): void {
    this.contractService.list().subscribe(
      data => {
        this.contract = data;
      },
      error => {
        this.toaster.error(`Error al cargar los contratos`, 'Fail', {
          timeOut: 3000, positionClass: 'toast-bottom-right'
        });
      }
    );
  }

  loadCellActive(): void {
    this.cellService.allActives().subscribe(
      data => {
        this.cell = data;
      },
      error => {
        this.toaster.error(`No hay espacios a reservar disponibles`, 'Fail', {
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


  onRegister(): void {
    if (!this.carService.detail(this.dniCar).subscribe()) {
      this.toaster.error(`Este Vehiculo ya Se encuentra Registrado`, 'Fail', {
        timeOut: 3000, positionClass: 'toast-bottom-right'
      });
    }else if (!this.ownerService.detail(this.dniOwner).subscribe()) {
      this.toaster.error(`El Propietario no existe, Por Favor Registrarlo`, 'Fail', {
        timeOut: 3000, positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/detail-owner']);
    }else {
      if (this.contractSelect == 1 && this.cellSelect != null) {
        this.cell[this.cellSelect-1].reserved = true;
        this.cellService.update(this.cell[this.cellSelect-1]).subscribe();
        this.local.reservedPlaces += 1;
        this.localService.update(this.local).subscribe();
      }

      const promise = new Promise((resolve) => {
        this.ownerService.detail(this.dniOwner).subscribe(
          data => {
            this.owner = data;
            resolve(this.owner = data);
          }
        );
      });

       promise.then(() => {
         this.car = new Car(this.dniCar, this.owner, this.contract[this.contractSelect-1]);
         this.carService.create(this.car).subscribe(
           data => {
             this.toaster.success(`Vehiculo Registrado Exitosamente`, 'OK', {
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
       });
    }
  }

}
