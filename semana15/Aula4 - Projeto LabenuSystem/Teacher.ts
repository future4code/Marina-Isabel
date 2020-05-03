import { User } from "./User";


export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}



export class Teacher implements User {
  id: string;
  name: string;
  email: string;
  specialties: TEACHER_SPECIALTY[] 

  constructor(id: string, name: string, email: string, specialties: TEACHER_SPECIALTY[]) {

    this.id = id
    this.name = name
    this.email = email
    this.specialties = specialties
  }

}