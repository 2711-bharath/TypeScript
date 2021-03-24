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

function isPlaying(constructorFunction:Function){
    constructorFunction.prototype.play = true;
}

@isPlaying // class Decorators
class Music{
    private song:string;
    constructor(song:string){
        this.song = song;
    }
}
console.log("Creating an object...")
let song1:Music = new Music("Blue Sweater"); 
console.log(song1)
console.log(`Song is playing : ${song1['play']}`)
/*

[LOG]: "Creating an object..." 
[LOG]: Music: {
  "song": "Blue Sweater"
} 
[LOG]: "Song is playing : true" 

*/
import { log } from 'ts-log-decorator';
// npm install ts-log-decorator --D



