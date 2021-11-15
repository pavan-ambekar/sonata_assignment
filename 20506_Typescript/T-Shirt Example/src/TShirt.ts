class TShirt {
  color: string
  material: string
  design: string
  size: string

  constructor(color: string, material: string, design: string, size: string) {
    this.color = color
    this.material = material
    this.design = design
    this.size = size
  }
  display(): void {
    console.log(this.color, this.design, this.material, this.size);
  }
}
var s = new TShirt('Black', 'Cotton', 'Round Nick', 'Small')
var l = new TShirt('Blue', 'Cotton', 'Round Nick', 'Large')
var xl = new TShirt('White', 'Cotton', 'V Nick', 'Extra Large')
s.display()
l.display()
xl.display()