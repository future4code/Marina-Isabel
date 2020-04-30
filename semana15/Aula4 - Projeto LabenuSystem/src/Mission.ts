import * as moment from 'moment'
import { Teacher } from './Teacher';
import { Student } from './Student';


export abstract class Mission {
    private name: string;
    private id: string;
    private initialDate: moment.Moment;
    private finishDate: moment.Moment;
    private TeacherList: Teacher[]
    private StudentsList: Student[] 

    constructor(name: string, id: string, initialDate: moment.Moment, finishDate:moment.Moment, TeacherList: Teacher[], StudentsList: Student[]){
        this.name = name
        this.id = id
        this.initialDate = initialDate
        this.finishDate = finishDate
        this.TeacherList = TeacherList
        this.StudentsList = StudentsList
    }

    public getId(): string {
        return this.id
    }

    public getName(name: string): string {
        return this.name 
    }

    public getInitialDate(): moment.Moment {
        return this.initialDate
    }

    public getFinishDate(): moment.Moment {
        return this.finishDate
    }

    // public getCurrentModule(): number | undefined {
    //     return this.currentModule;
    //   }
    
      public addTeacher(teacher: Teacher) {
        // console.log(`O professor ${this.name} foi adicionado com sucesso!`)
        this.TeacherList.push(teacher);
      }
    
      public addStudent(student: Student) {
        // console.log(`O aluno ${this.name} foi adicionado com sucesso!`)
        this.StudentsList.push(student);
      }
    
      public setName(name: string) {
        this.name = name;
      }
}