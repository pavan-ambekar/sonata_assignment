class Product {
  proID: number
  proName: string
  proPrice: number

  constructor(proID: number, proName: string, proPrice: number) {
    this.proID = proID
    this.proName = proName
    this.proPrice = proPrice
  }
  display(): void {
    console.log(this.proID, this.proName, this.proPrice + (this.proPrice / 100 * 18));

  }
}

var p1 = new Product(1, "laptop", 100)
var p2 = new Product(2, "Mobile", 10000)
p1.display()
p2.display()