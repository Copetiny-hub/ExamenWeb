import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LibrosComponent} from './libros/libros.component';
import {QuejasComponent} from './quejas/quejas.component';
import { MensajeComponent } from './mensaje/mensaje.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'libros', component:LibrosComponent},
  {path:'quejas', component:QuejasComponent},
  {path:'enviar', component:MensajeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
