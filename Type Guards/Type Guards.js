/*
    Type Guard -
    Type Guards allows us to narrow down the type of an object within a conditional block.
*/
// using typeof
function doSomething(x) {
    if (typeof (x) === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.substr(1));
    }
    // x.substr(1); // Error: There is no guarantee that `x` is a `string`
}
// using instanceof
var Foo = /** @class */ (function () {
    function Foo() {
        this.foo = 123;
        this.common = '123';
    }
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
        this.bar = 123;
        this.common = '123';
    }
    return Bar;
}());
function doStuff(arg) {
    if (arg instanceof Foo) {
        console.log(arg.foo);
        // console.log(arg.bar);  Error!
    }
    if (arg instanceof Bar) {
        // console.log(arg.foo);  Error!
        console.log(arg.bar);
    }
    console.log(arg.common);
}
doStuff(new Foo());
doStuff(new Bar());
function doStuff1(q) {
    if ('x' in q) {
        // q: A
    }
    else {
        // q: B
    }
}
//  * User Defined Type Guard!
function isFoo(arg) {
    return arg.foo !== undefined;
}
//  * Sample usage of the User Defined Type Guard
function doStuff2(arg) {
    if (isFoo(arg)) {
        console.log("given Foo argument : " + arg.foo); // OK
        // console.log(arg.bar); // Error!
    }
    else {
        // console.log(arg.foo); // Error!
        console.log("given Bar argument : " + arg.bar); // OK
    }
}
doStuff2({ foo: 123, common: '1234' });
doStuff2({ bar: 456, common: '1234' });
