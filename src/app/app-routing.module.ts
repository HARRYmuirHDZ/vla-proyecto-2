import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './view/directivas/directivas.component';
import { FormulariounoComponent } from './view/formulariouno/formulariouno.component';
import { GeneralComponent } from './view/general/general.component';
import { ConsumoapiComponent } from './view/consumoapi/consumoapi.component';

const routes: Routes = [
 /* todo lo que tiene que ver con routing*/
  {path: 'directivas', component: DirectivasComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'formulariouno', component: FormulariounoComponent},
  {path: 'consumoapi', component: ConsumoapiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
