"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Customer_1 = require("./Customer");
var Seller_1 = require("./Seller");
// Exercício 1 - a 
// Sim, é possível imprimir o password.
// b - A mensagem só apareceu uma vez.
var userData = new User_1.User("valorId", "jose@labenu.com", "Jose", "bananinha");
console.log(userData);
// Exercício 2
// a - Apenas uma vez a mensagem aparece.
// b- A mensagem aparece uma vez porque o customer é herda a mensagem do pai dele que é a classe User.
var customerData = new Customer_1.Customer("valorId", "maria@labenu.com", "Maria", "bananinhas2", "12345678x");
console.log(customerData);
// Exercício 3
// É possivel imprimir o password pois ela tem o  keyword this que só pode ser acessado dentro da propria classe. 
// Exercício 4 
customerData.introduceYourself();
// Exercício 5
console.log("Olá, sou " + customerData.introduceYourself(), "Bom dia!");
// Exercicio 6
// a - A mensagem só apareceu uma vez.
// b- id, email, name, password,  e baseSalary (Nao consegui fazer com que a Data aparecesse no console com o Date, não sei qual é o formato de data que ele recebe. Ele só aparece se for String.)
// const employeeData: Employee = new Employee("valorId", "joaquim@labenu.com", "Joaquim", "bananinha123","02/04/2020", 1000 )
// console.log(employeeData)
// Exercício 7
// public calculateTotalSalary(): number {
//     return this.baseSalary + 400
// }
// Exercício 8 
// Precisei passar todos os parâmetros do pai da seller.
// Consegui imprimir todos os parametros pois acho que a seller como filha, herdou os valores do pai Employee.
// const sellerData: Seller = new Seller("valorId", "ValorEmail", "ValorNome", "ValorSenha", "ValorData", 3000)
// console.log(sellerData)
// Exercício 9 
// Ele imprime o valor 0 junto com os outros valores do pai.
// Exercício 10
// a- 
var sellerData = new Seller_1.Seller("valorId", "ValorEmail", "ValorNome", "ValorSenha", "ValorData", 3000);
console.log(sellerData);
var sellerTotal = sellerData.calculateTotalSalary();
console.log(sellerTotal);
