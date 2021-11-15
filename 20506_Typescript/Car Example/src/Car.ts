export class Car {
  speed: number
  regularPrice: number
  color: string
  constructor(speed: number, regularPrice: number, color: string) {
    this.color = color
    this.regularPrice = regularPrice
    this.speed = speed
  }
  getSalePrice(): number {
    return this.regularPrice
  }
}