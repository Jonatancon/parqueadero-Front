import { Component, OnInit } from '@angular/core';
import {IndexComponent} from "../index/index.component";
import {ParkingService} from "../../services/parking.service";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
  }

}
