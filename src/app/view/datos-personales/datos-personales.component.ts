import { Component, Input } from '@angular/core';

@Component({
  selector: 'datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss'
})
export class DatosPersonalesComponent {

  
  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() edad: number = 0;

}
