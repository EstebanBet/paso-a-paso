export interface Pasos {
  id: number;
  titulo: string;
  subtitulo: string;
  url: string;
  estado:string;
}

export interface PasoAPaso{
    pasos:Pasos[];
}
