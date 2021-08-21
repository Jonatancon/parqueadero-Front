import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { NewUserComponent } from './components/new-user/new-user.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {interSeptorProvider} from "./interceptors/prod-interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    IndexComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutModule,
        FormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
  providers: [interSeptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
