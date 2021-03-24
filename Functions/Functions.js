/*
    Function -
    Syntax:
    function function_name(para1:data type,para2:data type,...):return data_type{
        // some code
    }
*/
// taking string as argument and printing it and and not returning anything 
// named function
function greet(username) {
    console.log("Hello " + username);
}
greet("Bharath");
// taking an array as argument and returning it's sum 
function addMarks(marks) {
    var sum = 0;
    marks.forEach(function (value) { return (sum += value); });
    return sum;
}
console.log("Marks : " + addMarks([90, 88, 92, 79, 82]) + "/500");
// Anonymous function it is in full function type
var product = function (x, y) {
    return x * y;
};
console.log(product(2, 5));
// optional parameters
function fullName(firstName, lastName, middleName) {
    console.log("Hello " + firstName + " " + middleName + " " + lastName);
}
fullName("Bhrath", "Reddy");
fullName("Bhrath", "M", "Reddy");
