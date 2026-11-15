//Readonly
//optional
//regular
//static variable


/* class Stu{
  name:string;
  age?:number;
  readonly ano:number;
  static sclname:string="SRMS"

  constructor(name:string,ano:number, age?:number){
    this.name=name;
    this.ano= ano;
    this.age=age;
    }

    getDet():void
    {
     console.log(`Name is  ${this.name}`)
     console.log(`Admission number is ${this.ano}`)

     if (this.age){
          console.log(`Age is ${this.age}`)
     }
     else{
      console.log("Age is not provided...")
     }
     console.log(`School name is ${Stu.sclname}`)
    }

    static changeSchoolName(newName: string): void {
    Stu.sclname = newName;
}
}
console.log("Original School name...")
let Stu1 = new Stu("john",2412, 16)
Stu1.getDet()
let Stu2 = new Stu("Peter",2434,16)
Stu2.getDet()

Stu.changeSchoolName("BU")
console.log("After changing the School name...")
Stu1.getDet()
Stu2.getDet() */




/* 

OUTPUT:
Original School name...
Name is  john
Admission number is 2412
Age is 16
School name is SRMS
Name is  Peter
Admission number is 2434
Age is 16
School name is SRMS
After changing the School name...
Name is  john
Admission number is 2412
Age is 16
School name is BU
Name is  Peter
Admission number is 2434
Age is 16
School name is BU
*/

//Overloading

/* class calculator{
  constructor()
  constructor(a:number,b:number)

  constructor(a?:number,b?:number){
    if (a!==undefined && b!==undefined){
       console.log("A+B is", (a+b))    }
    else{
      console.log("Default constructor is called..") 
    }
  }
    add(a:number,b:number):number
    add(a:number,b:number,c:number):number
    add(a:number,b:number,c?:number):number{
      if(c!==undefined)
      {
        return a+b+c
      }
      else{
        return a+b
      }
    }
  }

  let cal1= new calculator()
  let cal2= new calculator(10,20)
  
  console.log("Calculating from C1 and M1: ",cal1.add(10,20))
  console.log("Calculating from C1 and M2: ",cal2.add(10,20,30))

  console.log("Calculating from C1 and M1: ",cal2.add(10,10))
  console.log("Calculating from C1 and M2: ",cal2.add(10,20,40)) */

  /* 
  Default constructor is called..
A+B is 30
Calculating from C1 and M1:  30
Calculating from C1 and M2:  60
Calculating from C1 and M1:  20
Calculating from C1 and M2:  70

*/