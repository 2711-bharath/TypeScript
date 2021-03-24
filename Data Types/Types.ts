/*
    Basic data types that typescript provides are : 
    1. number
    2. string
    3. void
    4. null
    5. boolean
    6. enum
    7. any
    8. Array
    9. tuple
*/

// declaration of a string
let x : string;
x = "Hello World";
console.log(x);

// declaration of a number
let num : number;
num = 20;
console.log(num);
// declaration of array of number
let digits : number[]; // or Array<number>
digits = [10,20,30,40];
console.log(digits);

// declaration of boolean 
let flag : boolean;
flag = true;
console.log(flag);

// declaration of enum
enum Weeks {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}
let day : Weeks = Weeks.Wednesday;
console.log(day);


// declaration of any
let dynamicValue: any = "Hello World";
console.log(dynamicValue);
dynamicValue = 100;
console.log(dynamicValue);
dynamicValue = false;
console.log(dynamicValue);
// array of any
let dynamicList: any[] = [ "Bharath Reddy",18,true];
console.log(dynamicList)

// declaration of tuples
let person : [string, number] = ["Bharath", 2021];
console.log(person)

// declaration of union
let val : number|string|boolean;
val = 100;
console.log(val); 
val = true;
console.log(val);
val = "Apple";
console.log(val);


// declaration of Interfaces
let apple = {
    name:"apple",
    color:"red",
    cost:25,
    show: ()=>{
        console.log("Called Apple");
    }
}

console.log(apple);
console.log(apple.name);
apple.show()