import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReqresComponent } from './servicios-web/reqres/reqres.component';
import { FirebaseComponent } from './firebase/firebase/firebase.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReqresPromiseComponent } from './promesas/reqres/reqres.component';

@NgModule({
  declarations: [
    AppComponent,
    ReqresComponent,
    FirebaseComponent,
    ReqresPromiseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
