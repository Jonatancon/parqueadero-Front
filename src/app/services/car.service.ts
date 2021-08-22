import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Car} from "../models/car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carUrl = environment.carUrl;

  constructor(private httpClient: HttpClient) { }

  public create(car: Car): Observable<any> {
    return this.httpClient.post<any>(this.carUrl + 'car-save', car);
  }

  public detail(id: string): Observable<Car> {
    return this.httpClient.get<Car>(this.carUrl + `find-car/${id}`);
  }
}
