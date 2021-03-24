/* 
    Object Oriented programming
    
    Creating classes

    Syntax :
    class class_name{
        // class scope
    }    

    A class definition can include the following −

    Fields − A field is any variable declared in a class. Fields represent data pertaining to objects

    Constructors − Responsible for allocating memory for the objects of the class

    Functions − Functions represent actions an object can take. They are also at times referred to as methods.

    Data Hiding
    public
    private
    protected
*/

class Car{
    // feilds
    modelName:string
    carName:string
    cost:number

    // constructor
    constructor(modelName:string,carName:string,cost:number){
        this.modelName = modelName;
        this.carName = carName;
        this.cost = cost;
    }

    // function
    show():void{
        console.log("Model Name : "+this.modelName);
        console.log("Car Name : "+this.carName)
        console.log("Cost : "+this.cost);
    }

}

var audi = new Car("A8","Audi",2000000);
audi.show();

// Inheritance
// Single Inheritance
class Shape { 
    Area:number
    
    constructor(a:number) { 
        this.Area = a 
     } 
 } 
 
 class Circle extends Shape { 
    radius:number;

    constructor(radius:number){
        super(radius*radius*22/7);
        this.radius = radius;
    }
    disp():void { 
       console.log("Area of the circle radius " + this.radius+ " is : "+this.Area) 
    } 
 }
   
 var obj = new Circle(14); 
 obj.disp()

// Classes and Interfaces

interface Values { 
    a:number
    b:number 
} 
 
class Calculator implements Values { 
    a:number 
    b:number 
    sum:number
    
    constructor(a:number, b:number) { 
       this.a = a 
       this.b = b
       this.sum = a+b; 
    } 
 } 
 
var obj1 = new Calculator(10,15) 
console.log(`Sum of ${obj1.a} and ${obj1.b} is ${obj1.sum}`)