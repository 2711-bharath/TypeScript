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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // constructor
    function Car(modelName, carName, cost) {
        this.modelName = modelName;
        this.carName = carName;
        this.cost = cost;
    }
    // function
    Car.prototype.show = function () {
        console.log("Model Name : " + this.modelName);
        console.log("Car Name : " + this.carName);
        console.log("Cost : " + this.cost);
    };
    return Car;
}());
var audi = new Car("A8", "Audi", 2000000);
audi.show();
// Inheritance
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, radius * radius * 22 / 7) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle radius " + this.radius + " is : " + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(14);
obj.disp();
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
        this.sum = a + b;
    }
    return Calculator;
}());
var obj1 = new Calculator(10, 15);
console.log("Sum of " + obj1.a + " and " + obj1.b + " is " + obj1.sum);
