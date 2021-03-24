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
var x;
x = "Hello World";
console.log(x);
// declaration of a number
var num;
num = 20;
console.log(num);
// declaration of array of number
var digits; // or Array<number>
digits = [10, 20, 30, 40];
console.log(digits);
// declaration of boolean 
var flag;
flag = true;
console.log(flag);
// declaration of enum
var Weeks;
(function (Weeks) {
    Weeks[Weeks["Monday"] = 0] = "Monday";
    Weeks[Weeks["Tuesday"] = 1] = "Tuesday";
    Weeks[Weeks["Wednesday"] = 2] = "Wednesday";
    Weeks[Weeks["Thursday"] = 3] = "Thursday";
    Weeks[Weeks["Friday"] = 4] = "Friday";
    Weeks[Weeks["Saturday"] = 5] = "Saturday";
    Weeks[Weeks["Sunday"] = 6] = "Sunday";
})(Weeks || (Weeks = {}));
var day = Weeks.Wednesday;
console.log(day);
// declaration of any
var dynamicValue = "Hello World";
console.log(dynamicValue);
dynamicValue = 100;
console.log(dynamicValue);
dynamicValue = false;
console.log(dynamicValue);
// array of any
var dynamicList = ["Bharath Reddy", 18, true];
console.log(dynamicList);
// declaration of tuples
var person = ["Bharath", 2021];
console.log(person);
// declaration of union
var val;
val = 100;
console.log(val);
val = true;
console.log(val);
val = "Apple";
console.log(val);
// declaration of Interfaces
var apple = {
    name: "apple",
    color: "red",
    cost: 25,
    show: function () {
        console.log("Called Apple");
    }
};
console.log(apple);
console.log(apple.name);
apple.show();
