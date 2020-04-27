export class User {
    private name: string;
    private cpf: string;
    private age: number;
    private balance: number;
    private transactions: number;


    constructor(name: string, cpf:string, age:number, balance:number, transactions: number ) {
        this.name = name;
        this.cpf = cpf;
        this.age = age; 
        this.balance = balance;
        this.transactions = transactions;
    }

    addBalance():void{
        console.log(`Parabéns ${this.name} sua conta foi criada com sucesso!`)        
    }

    setAge(age: number){
        if(age < 18) {
            console.log("Idade não permitida para criar conta")
        }else{
            this.age = age
        }
        
    }
}


