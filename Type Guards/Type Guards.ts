/*
    Type Guard -
    Type Guards allows us to narrow down the type of an object within a conditional block.
*/

// using typeof
function doSomething(x: number | string) {
    if (typeof(x) === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.substr(1)); 
    }
    // x.substr(1); // Error: There is no guarantee that `x` is a `string`
}


// using instanceof
class Foo {
    foo = 123;
    common = '123';
}

class Bar {
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo); 
        // console.log(arg.bar);  Error  because arg is not instanceof Bar
    }
    if (arg instanceof Bar) {
        // console.log(arg.foo);  Error because arg is not instanceof Foo
        console.log(arg.bar); 
    }
    console.log(arg.common); 

}

doStuff(new Foo());
doStuff(new Bar());

// using in
interface A {
    x: number;
  }
  interface B {
    y: string;
}
  
function doStuff1(q: A | B) {
    if ('x' in q) {
      // q: A
    }
    else {
      // q: B
    }
}


// user defined type guard

interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}


//  * User Defined Type Guard!

function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}

//  * Sample usage of the User Defined Type Guard

function doStuff2(arg: Foo | Bar) {
    if (isFoo(arg)) {
        console.log(`given Foo argument : `+arg.foo); // OK
        // console.log(arg.bar); // Error!
    }
    else {
        // console.log(arg.foo); // Error!
        console.log(`given Bar argument : `+arg.bar); // OK
    }
}

doStuff2({ foo: 123, common: '1234' });
doStuff2({ bar: 456, common: '1234' });