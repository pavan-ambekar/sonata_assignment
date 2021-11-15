"use strict";
var Product = /** @class */ (function () {
    function Product(proID, proName, proPrice) {
        this.proID = proID;
        this.proName = proName;
        this.proPrice = proPrice;
    }
    Product.prototype.display = function () {
        console.log(this.proID, this.proName, this.proPrice + (this.proPrice / 100 * 18));
    };
    return Product;
}());
var p1 = new Product(1, "laptop", 100);
var p2 = new Product(2, "Mobile", 10000);
p1.display();
p2.display();
