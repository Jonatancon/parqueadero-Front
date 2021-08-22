import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {NewUserComponent} from "./components/new-user/new-user.component";
import {LoginComponent} from "./components/login/login.component";
import {ProdGuardService} from "./guards/prod-guard.service";
import {LoginGuard} from "./guards/login.guard";
import {OopsComponent} from "./layout/oops/oops.component";
import {CarComponent} from "./components/car/car.component";
import {OwnerComponent} from "./components/owner/owner.component";
import {ParkingComponent} from "./components/parking/parking.component";
import {PayComponent} from "./components/pay/pay.component";


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'pay-parking', component: PayComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: 'add-parking', component: ParkingComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: 'detail-owner', component: OwnerComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: 'detail-car', component: CarComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: 'error', component:OopsComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'new-user', component: NewUserComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
