"use strict";

let a = 10;

// What, Why, Which problem it solves
// What - gives might tighter scoping than 'var'

// var example
console.log("var Example");
var FOO = 10;
console.log(FOO);
FOO = 5;
console.log(FOO);

// const example
/*
console.log("const Example");
const FOO = 10;
console.log(FOO);
FOO = 5;
console.log(FOO);*/

// const saves reference and not values
const obj = {};
obj.foo = "bar"; // works

obj = {foo: "bar"} // gives error