import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/Pais';
import axios from 'axios';



@Injectable({
  providedIn: 'root'
})
export class ConsumoapiPaisService {

  private apiPais = "http://localhost:3015/api/route/ObtenerTodosLosPaises"

  constructor() { }

  obtenerPaisesDeAPI() : Observable<{DetalleRespuesta:Pais[]}>{
    return new Observable( observer => {
      axios.get<{DetalleRespuesta: Pais[]}>(this.apiPais)
      .then(response =>{
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      })
    })
  }
}
