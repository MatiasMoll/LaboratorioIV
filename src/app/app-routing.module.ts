import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '/',component: AppComponent},
  {path: 'ejercicio2', component: LoginComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'error' ,component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
