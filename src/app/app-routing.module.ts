import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
{ path: '', component: AdminLoginComponent},
{ path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
