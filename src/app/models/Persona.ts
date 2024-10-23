export class Persona
{
    nombre : string = "";
    Correo : string = "";
    userName : string = "";
    passWord: string = "";
    correo: string;

    constructor(pNombre: string, pCorreo: string, pUserName: string, pPassword: string,)
    {
        this.nombre = pNombre;
        this.correo = pCorreo;
        this.userName = pUserName;
        this.passWord = pPassword;
    }
}