import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';

const routes: Routes = [
  {
    path: "contactanos",
    component: ContactanosComponent
  },
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "ubicanos",
    component: UbicanosComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
