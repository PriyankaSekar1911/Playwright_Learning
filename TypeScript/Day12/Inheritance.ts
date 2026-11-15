/* class Car1{
brand:string;
color:string;
model:string

constructor(brand:string,color:string,model:string){
  this.brand=brand;
  this.color=color;
  this.model=model
}

start(){
  console.log ("Car started")
  }
stop(){
  console.log("car stopped..")
}

display(){
  console.log(` The car ${this.brand} is in ${this.color} color and ${this.model} model`)
}}

class Citreon extends Car1{
  year: number;
  
constructor( brand:string,color:string,model:string,year:number){
  super(brand,color,model);
  this.year=year
}
citreonStart(){
  console.log( `Citreon  is startedd...`)
}

citroenYear(){
  console.log( ` The car ${this.brand} is in ${this.color} color and ${this.model} model`)
}

}

class Mahindra extends Car1{
  year:number
  constructor(brand:string,color:string,model:string,year:number){
    super(brand,color,model)
    this.year=year
  }
  mahStart(){
    console.log( `Mahindra is started...`)
  }
  mahYear(){
  console.log( ` The car is manufactured in ${this.year}`)
}

}

let C1= new Citreon("Citroen","White","Basic",2024)
console.log("Car name is ",C1.brand)
console.log("Car color is ",C1.color)
console.log("Car model is ",C1.model)
console.log("Car is manufactured in ",C1.year)


C1.start()
C1.stop()
C1.display()
C1.citreonStart()
C1.citroenYear()



let M1= new Mahindra("Mahendra","Black","Thar",2026)
console.log("Car name is ",M1.brand)
console.log("Car color is ",M1.color)
console.log("Car model is ",M1.model)
console.log("Car is manufactured in ",M1.year)
M1. mahYear()
M1.start()
M1.stop()
M1.display()
M1.mahStart()


let ccar= new Car1("Honda","Blue","Baleno")
ccar.display()
ccar.start() */


/* 

OUTPUT:

Car name is  Citroen
Car color is  White
Car model is  Basic
Car is manufactured in  2024
Car started
car stopped..
 The car Citroen is in White color and Basic model
Citreon  is startedd...
 The car Citroen is in White color and Basic model
Car name is  Mahendra
Car color is  Black
Car model is  Thar
Car is manufactured in  2026
 The car is manufactured in 2026
Car started
car stopped..
 The car Mahendra is in Black color and Thar model
Mahindra is started...
 The car Honda is in Blue color and Baleno model
 
 */



 // Super(),super. usage

 class Parent{
  num:number=10;
  constructor(){
    console.log("This is Parent class constructor")
  }
  display(){
    console.log("This is a parent class display() method ")
  }
 }
 class Child extends Parent{
  num:number=20;
  constructor(){
    super()
    console.log("This is child class constructor")
  }
  show(){
    console.log("This is child class show() method")
    super.display()
  }
  
 }
 let C1= new Child()
 C1.show()
 C1.display()
 /* 
 
 
 OUTPUT:
 
 This is Parent class constructor
This is child class constructor
This is child class show() method
This is a parent class display() method 
This is a parent class display() method 

*/


//ACCESS MODIFIER

class Stud{
  public name:string;
  protected age:number;
  public std:number
  constructor(name:string,age:number,std:number){
    this.name=name;
    this.age=age;
    this.std=std
  }
  public display(){
    console.log("Name is ",this.name," is ",this.age," years old", "and studing in ", this.std)
  }}

  class S1 extends Stud{
    private gender:string
    constructor(name:string,age:number,std:number,gender:string){
      super(name,age,std)
      this.gender=gender
    }
    show(){
      console.log("Name is ",this.name," is ",this.age," years old", "and studing in ", this.std, "and is a ",this.gender)
    }
  }
let st= new S1("John",12,6,"Male")
st.show()
st.display()
//st.gender() Not accessible because of private compile time error
//st.age() Not accessible because of protected CTE

/* 

OUTPUT:*/