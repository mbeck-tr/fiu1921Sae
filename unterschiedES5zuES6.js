// //Block Scope
// var a = 10;
// {
//     //Das ist ein Anweisungsblock
//     var b = 20;
// }
// console.log(a);
// console.log(b);

// function writeC(){
//     var c = "function";
// }
// writeC();
// //console.log(c);

// {
//     function writeD(){
//         var d = 30;
//         console.log(d);
//     }
//     writeD();
// }

// //console.log(d);

// // IIFE immediatly invoked Function Expression
// (function writeE(){
//     var e = 50;
//     console.log(e);
// })();

// //ES6 -> Schlüsselwort let
// let x = 10;
// {
//     let y = 10;
// }
// console.log(x);
// console.log(y);

// let text = `text
// zweite zeile
// dritte zeile ...
// `
// let placeholder = `Variable x=${x}`;

class Person{
    firstName = "";
    lastName = "";
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name(){
        return  `${this.firstName} ${this.lastName}`;
    }

    whoAreYou(){
        return `Hi, i'm ${this.name()}`;
    }
}

let michael = new Person("Michael","Schmitt");
console.log(michael.whoAreYou());