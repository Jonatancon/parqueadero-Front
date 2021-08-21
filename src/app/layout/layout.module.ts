import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "../app-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { OopsComponent } from './oops/oops.component';


@NgModule({
  declarations: [
    NavbarComponent,
    OopsComponent
  ],

  exports: [
    NavbarComponent
  ],

    imports: [
        CommonModule,
        AppRoutingModule,
        FontAwesomeModule
    ]
})
export class LayoutModule { }
