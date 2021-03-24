"use strict";
/*
TypeScript Decorators :

It is a special type of declaration that can be applied to classes, methods, accessor, property, or parameter.
These are simply functions that are prefixed @expression symbol.

Types of decorators -

1. Class Decorators
2. Method Decorators
3. Accessor Decorators
4. Property Decorators
5. Parameter Decorators

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function isPlaying(constructorFunction) {
    constructorFunction.prototype.play = true;
}
var Music = /** @class */ (function () {
    function Music(song) {
        this.song = song;
    }
    Music = __decorate([
        isPlaying // class Decorators
    ], Music);
    return Music;
}());
console.log("Creating an object...");
var song1 = new Music("Blue Sweater");
console.log(song1);
console.log("Song is playing : " + song1['play']);
/*

[LOG]: "Creating an object..."
[LOG]: Music: {
  "song": "Blue Sweater"
}
[LOG]: "Song is playing : true"

*/
var ts_log_decorator_1 = require("ts-log-decorator");
// npm install ts-log-decorator --D
var Item = /** @class */ (function () {
    function Item() {
        this.itemArr = [];
    }
    Item.prototype.Add = function (item) {
        this.itemArr.push(item);
    };
    Item.prototype.GetAll = function () {
        return this.itemArr;
    };
    __decorate([
        ts_log_decorator_1.log
    ], Item.prototype, "Add");
    return Item;
}());
