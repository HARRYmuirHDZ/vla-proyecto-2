import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if-dos',
  templateUrl: './directiva-ng-if-dos.component.html',
  styleUrl: './directiva-ng-if-dos.component.scss'
})
export class DirectivaNgIfDosComponent {
  edad:number | null = null;
  mensaje:string = "";


  verificarEdad(){
    if(this.edad !==null)
    if(this.edad >=18)
      this.mensaje = "Usted es una persona mayor de edad";
    else
    this.mensaje = "Usted es menor de edad";
    else
    this.mensaje = "Ingrese una edad valida";
  }
}
