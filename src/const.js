"use strict";

// What, Why, Which problem it solves
// What - makes primitive values immutable

// var example
console.log("var Example");
var FOO = 10;
console.log(FOO);
FOO = 5;
console.log(FOO);

// const example
//console.log("const Example");
//const FOO = 10;
//console.log(FOO);
//FOO = 5;
//console.log(FOO);

// const saves reference and not values

const obj = {};
obj.foo = "bar"; // works
console.log(obj);

obj = {foo: "bar"} // gives error
