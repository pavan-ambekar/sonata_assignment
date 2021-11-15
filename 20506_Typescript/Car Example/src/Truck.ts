import { Car } from './Car'
class Truck extends Car {
  weight: number
  constructor(speed: number, regularPrice: number, color: string, weight: number) {
    super(speed, regularPrice, color)
    this.weight = weight
  }
  getSalePrice(): number {
    var price = super.getSalePrice()
    if (this.weight > 2000) {
      return price - (price / 10)
    }
    return price - (price / 5)
  }
}

var t1 = new Truck(160, 10000, 'black', 1000)
console.log(t1.getSalePrice());

var t2 = new Truck(180, 10000, 'black', 3000)
console.log(t2.getSalePrice());
