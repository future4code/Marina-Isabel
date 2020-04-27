"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, cpf, age, balance, transactions) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = balance;
        this.transactions = transactions;
    }
    addBalance() {
        console.log(`Parabéns ${this.name} sua conta foi criada com sucesso!`);
    }
    setAge(age) {
        if (age < 18) {
            console.log("Idade não permitida para criar conta");
        }
        else {
            this.age = age;
        }
    }
}
exports.User = User;
//# sourceMappingURL=UserAccount.js.map