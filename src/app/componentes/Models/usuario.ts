export class Usuario {
    idusuario:number=0;
    dpi:number=0;
    nombre:string="";
    apellidos:string="";
    correo:string="";
    id_cargo:number=0;
    estado:number=0;
    usuariocreo:number=0;
    fechacreacion:string="";
    fechamodificacion:string="";
    usuariomodifico:number=0;
    password:string="";
    rol:number=0;
    idpuntoatencion:any=null;
    telefono:string="";


}

export interface usuarioSesion {
    username:string;
    password:string;
}