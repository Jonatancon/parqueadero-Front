import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {NewUserComponent} from "./components/new-user/new-user.component";
import {LoginComponent} from "./components/login/login.component";
import {ProdGuardService} from "./guards/prod-guard.service";
import {LoginGuard} from "./guards/login.guard";


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'new-user', component: NewUserComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
