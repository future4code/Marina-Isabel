import * as moment from 'moment'


export abstract class Mission {
    private name: string;
    private id: string;
    private initialDate: moment.Moment;
    private finishDate: moment.Moment;
    private TeacherList: string;
    private StudentsList: string;

    constructor(id: string, initialDate: moment.Moment, finishDate:moment.Moment, TeacherList: string, Students:string){
        this.id = id
        this.initialDate = initialDate
        this.finishDate = finishDate
        this.TeacherList = TeacherList
        this.StudentsList = this.StudentsList
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
    
    //   public addTeacher(teacher: Teacher) {
    //     this.teachers.push(teacher);
    //   }
    
    //   public addStudent(student: Student) {
    //     this.students.push(student);
    //   }
    
      public setName(name: string) {
        this.name = name;
      }
}