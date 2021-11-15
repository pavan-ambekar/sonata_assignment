class Student {
  stdID: number
  stdName: string
  stdClass: number
  constructor(id: number, stdName: string, stdClass: number) {
    this.stdID = id
    this.stdName = stdName
    this.stdClass = stdClass
  }
  display(): void {
    console.log(this.stdID, this.stdName, this.stdClass);

  }
}

var s1 = new Student(1, "Pavan A", 10)
var s2 = new Student(2, "Rio", 8)
s1.display()
s2.display()