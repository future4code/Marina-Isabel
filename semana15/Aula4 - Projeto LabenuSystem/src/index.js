"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var moment = require("moment");
var Teacher_1 = require("./Teacher");
var FullTimeMission_1 = require("./FullTimeMission");
var NightMission_1 = require("./NightMission");
moment.locale("pt-br");
var newStudent = new Student_1.Student("ValorId", "Manoel", "manoel@live.com", moment("25/05/1994", "DD/MM/YYYY"), ["Jogar Bola"]);
// console.log(newStudent)
var newStudent2 = new Student_1.Student("ValorId", "Beatriz", "beatriz@live.com", moment("25/05/1994", "DD/MM/YYYY"), ["Dançar Tango"]);
// console.log(newStudent2)
var teacher1 = new Teacher_1.Teacher("ValorId", "Paulinha", "paulinha@labenu.com", []);
var teacher2 = new Teacher_1.Teacher("ValorId", "Soter", "soter_bananinha@labenu.com", []);
var teacher3 = new Teacher_1.Teacher("ValorId", "Goli", "goli_hp@labenu.com", []);
var teacher4 = new Teacher_1.Teacher("ValorId", "João", "joao@labenu.com", []);
var class1 = new FullTimeMission_1.FullTimeMission("Nome", "ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [], []);
class1.addStudent(newStudent);
class1.addTeacher(teacher1);
class1.addTeacher(teacher3);
console.log(class1);
var class2 = new NightMission_1.NightMission("Nome", "ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [], []);
class2.addStudent(newStudent2);
class2.addTeacher(teacher2);
class2.addTeacher(teacher4);
console.log(class2);
