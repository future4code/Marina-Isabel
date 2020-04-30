"use strict";
exports.__esModule = true;
var moment = require("moment");
var Student = /** @class */ (function () {
    function Student(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    Student.prototype.getAge = function () {
        return moment().diff(this.birthDate, "years");
    };
    return Student;
}());
exports.Student = Student;
