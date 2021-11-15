"use strict";
var Student = /** @class */ (function () {
    function Student(id, stdName, stdClass) {
        this.stdID = id;
        this.stdName = stdName;
        this.stdClass = stdClass;
    }
    Student.prototype.display = function () {
        console.log(this.stdID, this.stdName, this.stdClass);
    };
    return Student;
}());
var s1 = new Student(1, "Pavan A", 10);
var s2 = new Student(2, "Rio", 8);
s1.display();
s2.display();
