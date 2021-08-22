import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Parking} from "../models/parking";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  parkingUrl = environment.parkingUrl;

  constructor(private httpClient: HttpClient) { }

  public carActive(id: number): Observable<Parking> {
    return this.httpClient.get<Parking>(this.parkingUrl + `car-active/${id}`);
  }

  public allCarActives(): Observable<Parking[]> {
    return this.httpClient.get<Parking[]>(this.parkingUrl + 'alls-active');
  }

  public save(parking: Parking): Observable<any> {
    return this.httpClient.post<any>(this.parkingUrl + 'save', parking);
  }

  public update(parking: Parking): Observable<any> {
    return this.httpClient.post<any>(this.parkingUrl + 'update', parking);
  }
}
