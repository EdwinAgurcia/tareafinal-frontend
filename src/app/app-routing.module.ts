import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotaVehicularComponent } from './pages/flota-vehicular/flota-vehicular.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  
    {path:'', pathMatch:'full',redirectTo: '/login'},
    {path: 'login', component:LoginComponent},
    {
    path: '', 
  component: MenuComponent,
  children: [
    {path: 'welcome',component:WelcomeComponent},
    {path: 'flota-vehicular', component:FlotaVehicularComponent}
  ] 
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
