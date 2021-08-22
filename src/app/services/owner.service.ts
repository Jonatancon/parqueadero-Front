import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Owner} from "../models/owner";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  ownerUrl = environment.ownerUrl;

  constructor(private httpClient: HttpClient) { }

  public create(owner: Owner): Observable<any> {
    return this.httpClient.post<any>(this.ownerUrl + 'save', owner);
  }

  public detail(id: string): Observable<Owner> {
    return this.httpClient.get<Owner>(this.ownerUrl + `get-owner/${id}`);
  }
}
