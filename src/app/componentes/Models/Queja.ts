export class Queja {
    idQueja?: number=0;
    nombre: string='';
    correo: string='';
    telefono: string='';
    correlativo?: string='';
    idMedioIngresoQueja: number=0;
    idPuntoAtencion: number=0;
    fechaHoraIngreso?: string='';
    detalleQueja: string='';
    usuariocreo: string='';
    fechacreacion?: string='';
    fechamodificacion?: string='';
    usuariomodifico?: string='';
    idTipoQueja: number=0;
    idEstado?: number=0;
}

export interface tableQueja {
    correlativo: string;
    puntoAtencion: string;
    region: string;
    estado: string;
    medioIngreso: string;
    fechaCreacion: string;
    detalle: string;

}