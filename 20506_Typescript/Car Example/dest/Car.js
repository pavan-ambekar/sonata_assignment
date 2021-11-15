"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(speed, regularPrice, color) {
        this.color = color;
        this.regularPrice = regularPrice;
        this.speed = speed;
    }
    Car.prototype.getSalePrice = function () {
        return this.regularPrice;
    };
    return Car;
}());
exports.Car = Car;
