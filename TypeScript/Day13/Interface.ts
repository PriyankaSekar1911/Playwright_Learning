/* 
interface InterfaceName
{
properties
abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface */

/* interface person{
  name:string,
  age:number
  
}

let p1:person={
name:"John",
  age:24
  
}
console.log(p1.name)
console.log(p1.age)
console.log(p1)
 */
/* 
OUTPUT:

John                                          
24         
{ name: 'John', age: 24 }*/

//2 Optional properties & 3. Readonly
/* interface stu{
  name:string,
  readonly gender:string,
  age?:number,
}
let s1:stu ={
  name:"Peter",
  gender:"male"
}
let s2:stu={
  name:"Mary",
  gender:"female",
  age:20
}
console.log("s1 Name before updating","'",s1.name,"'")
console.log("S2 name is ",s2.name,"Age is ",s2.age, " gender is ", s2.gender)

s1.name="parker"
console.log("After changing the s1 name is ","'",s1.name,"'", "gender is",s1.gender) */


/* 
OUTPUT:
s1 Name before updating ' Peter '
S2 name is  Mary Age is  20  gender is  female
After changing the s1 name is  ' parker ' gender is male

*/

//Interface extends interface
/* interface animal{
  name:string
}
interface cat extends animal{
  name:string,
  color:string
}
let c1:cat={
name: "cat",
  color:"brown"
}
console.log("The name of the animal is ",c1.name," and the color is ",c1.color) */
/* 

OUTPUT:
The name of the animal is  cat  and the color is  brown*/


//Class interprets interface

interface animal{
  name:string
}
class dog implements animal{
  name:string;
  color:string;
  constructor(name:string, color:string){
    this.name=name,
    this.color=color
    }
 sound(){
  console.log("The dog barks...")
 }
}
let d1=new dog("oreo","Blonde")
console.log("The name of the dog is ",d1.name," and is in ",d1.color," color")
d1.sound();


/* 
oUTPUT:
The name of the dog is  oreo  and is in  Blonde  color
The dog barks...
 */


// Modules will be helpfulwhen we use a class/ method... from one file to other file using export we can create a module but we can't execute it, in the files where we need to sue the class we have to use the term import..

/* 
export let appname="Calculator";

export function add(a:number,b:number):number{
    return a+b;
}


export class Formatter
{
    static toUpper(str:string):string{
        return str.toUpperCase();
    }

}

 */


/*  MAIN
//Approach 1: 

/*import {appname} from "./Module"
import {add} from "./Module"
import {Formatter} from "./Module"
*/

/*
import {appname,add,Formatter} from "./Module";  


console.log(appname);
console.log(add(10,20));
console.log(Formatter.toUpper("welcome"));

*/

//Approach 2: 
//Import Everything (Namespace Import)
//This is useful when you want to group everything from a module or avoid listing individual exports.
/* 
import * as utils from "./Module";

console.log(utils.appname);
console.log(utils.add(10,20));
console.log(utils.Formatter.toUpper("welcome")); */ 