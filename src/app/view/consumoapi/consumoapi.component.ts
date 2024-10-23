import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/Pais';
import { ConsumoapiPaisService } from '../../services/consumoapi-pais.service';
import { error } from 'console';

@Component({
  selector: 'app-consumoapi',
  templateUrl: './consumoapi.component.html',
  styleUrl: './consumoapi.component.scss'
})
export class ConsumoapiComponent implements OnInit {

  vectorPaises : Pais[] =[];

  constructor(private paisesServices : ConsumoapiPaisService){}

  ngOnInit(): void {
    //llamar al api
    this.paisesServices.obtenerPaisesDeAPI().subscribe(
      data=>{
        this.vectorPaises = data.DetalleRespuesta;
        console.log(this.vectorPaises);
      },
      error =>{
        console.log("Error al cargar los paises", error)
      }
    )
  }
}
