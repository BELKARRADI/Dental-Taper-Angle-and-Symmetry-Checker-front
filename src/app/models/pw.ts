import {Tooth} from "./tooth";

export class Pw {
  id?: number;
  title?: string;
  objectif?: string;
  docs?:string;

  tooth?:Tooth;
  id_tooth?:number;



  constructor(id?: number, title?: string, objectif?: string,  docs?:string,  tooth?:Tooth) {
    this.id = id;
    this.title = title;
    this.objectif = objectif;
    this.docs = docs;
    this.id_tooth=tooth?.id;

  }
  setTooth(id?: number){
    this.tooth=new Tooth(id);
  }
}
