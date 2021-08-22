import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {TokenService} from "../services/token.service";
import {catchError, concatMap} from "rxjs/operators";
import {JwtDTO} from "../models/jwt-dto";
import {AuthService} from "../services/auth.service";

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root'
})

export class ProdInterceptorService implements HttpInterceptor{

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();

    intReq = ProdInterceptorService.addToken(req, token);

    return next.handle(intReq).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        const dto: JwtDTO = new JwtDTO(this.tokenService.getToken());
        return this.authService.refreshToken(dto).pipe(concatMap((data: any) => {
          this.tokenService.setToken(data.token);
          intReq = intReq = ProdInterceptorService.addToken(req, data.token);
          return next.handle(intReq);
        }));
      } else {
        //this.tokenService.logOut();
        return throwError(error);
      }
    }));
  }

  private static addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({headers: req.headers.set(AUTHORIZATION, 'Bearer ' + token)});
  }

}

export const interSeptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true}];
