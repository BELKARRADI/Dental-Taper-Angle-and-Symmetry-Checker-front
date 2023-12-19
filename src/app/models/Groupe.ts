import {Professor} from "./professor";

export class Groupe {
  id?: number;
  code?: string;
  year?: string;
  professor?:Professor;

  id_professor?:number;




  constructor(id?: number, code?: string, year?: string,  professor?:Professor) {
    this.id = id;
    this.code = code;
    this.year = year;
    this.professor = professor;
    this.id_professor=professor?.id;

  }
  setProfessor(id?: number){
    this.professor=new Professor(id);
  }
}
