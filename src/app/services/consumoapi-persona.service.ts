import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
import axios from 'axios';
import { PersonaEliminar } from '../models/PersonaEliminar';


@Injectable({
  providedIn: 'root'
})
export class ConsumoapiPersonaService {
  [x: string]: any;

  private apiPersona = "http://localhost:3015/api/route/";

  constructor() { }

  obtenerPersonasDelAPI(): Observable<any> {
    return new Observable(observer => {
      axios.get<any>(`${this.apiPersona}/ObtenerPersonas`)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
  
  RegistrarNuevaPersonaApi(nuevaPersona:Persona) : Observable<any>{
    return new Observable( observer => {
      axios.post<any>(`${this.apiPersona}/RegistarNuevaPersona`,nuevaPersona)
      .then(response =>{
        observer.next(response.data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      })
    })
  }
    EliminarPersonaApi(personaEliminar:PersonaEliminar) : Observable<any>{
      return new Observable( observer => {
        axios.post<any>(`${this.apiPersona}/EliminarPersona`,personaEliminar)
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

