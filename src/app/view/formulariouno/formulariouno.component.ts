import { Component, ViewChild } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ConsumoapiPersonaService } from '../../services/consumoapi-persona.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaEliminar } from '../../models/PersonaEliminar';

@Component({
  selector: 'app-formulariouno',
  templateUrl:'./formulariouno.component.html',
  styleUrl: './formulariouno.component.scss'
})
export class FormulariounoComponent {

  vectorPersonas : Persona[] =[];
  nombrePersona : string="";
  correoPersona : string="";
  userNamePersona: string="";
  passwordPersona: string="";
  mostrarMensajeError: boolean = false;
  codigoRespuestaApi : number = 0;
  DescripcionRespuestaApi: string = "";

  @ViewChild('ContenedorRespuesta', {static:true}) modalRespuesta:any;
  VerTodasLasPersonas: any;

  constructor(private personasServices : ConsumoapiPersonaService,
              private modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.VerTodasLasPerosnas();
  }

  VerTodasLasPerosnas():void
  {
        //llamar al api
        this.personasServices.obtenerPersonasDelAPI().subscribe(
          data=>{
            this.vectorPersonas = data.DetalleRespuesta;
    
          },
          error =>{
            console.log("Error al cargar los paises", error)
          }
        )
  }
  AbrirModal(content:any):void
  {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
      GuardarPersona():void
  {
    let nuevaPersona = new Persona(this.nombrePersona, this.correoPersona, this.userNamePersona, this.passwordPersona);

    this.mostrarMensajeError = this.ValidarCampos();

    if(!this.mostrarMensajeError){
      
    this.personasServices.RegistrarNuevaPersonaApi(nuevaPersona).subscribe(
        data=>{
        console.log(data.codigo);
        this.codigoRespuestaApi = data.codigo;
        this.DescripcionRespuestaApi = data.Descripcion;


        if(this.codigoRespuestaApi == 0){
        this.nombrePersona = this.correoPersona = this.userNamePersona = this.passwordPersona ="";
        this.VerTodasLasPersonas();
        this.modalService.dismissAll(this.modalRespuesta);
      }
      this.modalService.open(this.modalRespuesta);
      }, 
      error =>{
        console.log("Error al cargar los paises", error)
      }
    )
  }
  else{
    this.modalService.dismissAll(this.modalRespuesta);
  }
  }

  ValidarCampos(): boolean
  {
    if(this.nombrePersona == ""|| this.correoPersona == ""|| this.userNamePersona == ""
      || this.passwordPersona == "")
      return true;

      return false;
    }
    
    
    
    EliminarPersona(i: number): void{

      const personaEnPosicion = this.vectorPersonas[i];
      const personaEliminar = new PersonaEliminar(personaEnPosicion.userName);

      this.personasServices.EliminarPersonaApi(personaEliminar).subscribe(
        data=>{
          
          this.codigoRespuestaApi = data.codigo;
          this.DescripcionRespuestaApi = data.Descripcion;
  
  
          if(this.codigoRespuestaApi == 0){
          this.nombrePersona = this.correoPersona = this.userNamePersona = this.passwordPersona ="";
          this.VerTodasLasPersonas();

        }
        this.modalService.open(this.modalRespuesta);
        }, 
        error =>{
          console.log("Error al cargar las personas", error)
        }
      )
      
  
  
  
  
    }
}
