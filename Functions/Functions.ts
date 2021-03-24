/*
    Function -
    Syntax:
    function function_name(para1:data type,para2:data type,...):return data_type{
        // some code
    }
*/

// taking string as argument and printing it and and not returning anything 
// named function
function greet(username:string):void{
    console.log("Hello "+username);
}

greet("Bharath")

// taking an array as argument and returning it's sum 
// arrow function
function addMarks(marks:number[]):number{
    let sum:number=0;
    marks.forEach((value:number):number=>(sum+=value));
    return sum;
}

console.log("Marks : "+addMarks([90,88,92,79,82])+"/500")

// Anonymous function it is in full function type
let product: (x: number, y: number) => number = function (x:number, y:number):number {
    return x * y;
};

console.log(product(3,5));

// optional parameters has ? before assigning data type in parameter
function fullName(firstName:string,lastName:string,middleName?:string):void{
    console.log(`Hello ${firstName} ${middleName} ${lastName}`)
}

fullName("Bhrath","Reddy")
fullName("Bhrath","M","Reddy")
