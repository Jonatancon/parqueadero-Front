import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "../app-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { OopsComponent } from './oops/oops.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    NavbarComponent,
    OopsComponent,
    DialogOverviewComponent
  ],

  exports: [
    NavbarComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class LayoutModule { }
