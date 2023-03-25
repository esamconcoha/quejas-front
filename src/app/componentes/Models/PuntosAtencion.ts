export class PuntosAtencion {
    idPuntoAtencion: number=0;
    idRegion: number=0;
    nombrePuntoAtencion: string='';
    usuuariocreo: string='';
    fechacreacion: string='';
    fechamodificacion: string='';
    usuariomodifico: string='';
    estado: number=0;
}

export interface PuntosAtencionList {
    idPuntoAtencion: number;
    nombrePuntoAtencion: string;
}