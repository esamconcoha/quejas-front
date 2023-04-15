export class Usuario {
    idusuario?:number=0;
    dpi?:number=0;
    nombre?:string="";
    apellidos?:string="";
    correo?:string="";
    id_cargo?:number=0;
    estado?:number=0;
    usuariocreo?:number=0;
    fechacreacion?:string="";
    fechamodificacion?:string="";
    usuariomodifico?:number=0;
    password?:string="";
    rol?:number=0;
    idpuntoatencion?:any=null;
    telefono?:string="";

}

export interface usuarioSesion {
    username:string;
    password:string;
}

export interface tablaUsuario{
    idUsuario:number;
    nombreUsuario:string;
    region: string;
    puntoAtencion:string;
    cargo: string;
    correo:string;
    estado:string;

}

export interface traerPunto{
    idPuntoAtencion:number;
    nombrePunto:string;
}

export interface traerCargo{
    idCargo:number;
    nombreCargo:string;
}