import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cell} from "../models/cell";

@Injectable({
  providedIn: 'root'
})
export class CellService {

  cellUrl = environment.cellUrl;

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Cell[]> {
    return this.httpClient.get<Cell[]>(this.cellUrl + 'cell-all');
  }

  public allActives(): Observable<Cell[]> {
    return this.httpClient.get<Cell[]>(this.cellUrl + 'cell-actives');
  }

  public update(cell: Cell): Observable<any> {
    return this.httpClient.post<any>(this.cellUrl + 'cell-update', cell);
  }
}
