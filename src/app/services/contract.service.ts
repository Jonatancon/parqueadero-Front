import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractUrl = environment.contractUrl;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.contractUrl + 'list');
  }
}
