"use strict";
var TShirt = /** @class */ (function () {
    function TShirt(color, material, design, size) {
        this.color = color;
        this.material = material;
        this.design = design;
        this.size = size;
    }
    TShirt.prototype.display = function () {
        console.log(this.color, this.design, this.material, this.size);
    };
    return TShirt;
}());
var s = new TShirt('Black', 'Cotton', 'Round Nick', 'Small');
var l = new TShirt('Blue', 'Cotton', 'Round Nick', 'Large');
var xl = new TShirt('White', 'Cotton', 'V Nick', 'Extra Large');
s.display();
l.display();
xl.display();
