import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Local} from "../models/local";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  localUrl = environment.localUrl;

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Local> {
    return this.httpClient.get<Local>(this.localUrl + `find/${id}`);
  }

  public update(local: Local): Observable<any> {
    return this.httpClient.post<any>(this.localUrl + 'update', local);
  }
}
