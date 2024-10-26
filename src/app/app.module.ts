import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './view/datos-personales/datos-personales.component';
import { DirectivasComponent } from './view/directivas/directivas.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { GeneralComponent } from './view/general/general.component';
import { ConsumoapiComponent } from './view/consumoapi/consumoapi.component';
import { FormulariounoComponent } from './view/formulariouno/formulariouno.component';
import { DirectivaNgModelComponent } from './components/directiva-ng-model/directiva-ng-model.component';
import { DirectivaNgModelDosComponent } from './components/directiva-ng-model-dos/directiva-ng-model-dos.component';
import { DirectivaNgIfComponent } from './components/directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgIfDosComponent } from './components/directiva-ng-if-dos/directiva-ng-if-dos.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';


@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    DirectivasComponent,
    GeneralComponent,
    ConsumoapiComponent,
    FormulariounoComponent,
    DirectivaNgModelComponent,
    DirectivaNgModelDosComponent,
    DirectivaNgIfComponent,
    DirectivaNgIfDosComponent,
    TablaPaisesComponent,
    CarruselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
