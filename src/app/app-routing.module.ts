import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirebaseComponent } from './firebase/firebase/firebase.component';
import { HomeComponent } from './home/home/home.component';
import { ReqresPromiseComponent } from './promesas/reqres/reqres.component';
import { ReqresComponent } from './servicios-web/reqres/reqres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reqres', component: ReqresComponent },
  { path: 'promesas', component: ReqresPromiseComponent },
  { path: 'firebase', component: FirebaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
