"use strict";

let a = 10;

// What, Why, Which problem it solves
// What - gives might tighter scoping than 'var'

// var example
console.log("var Example");
function foo(x) {
  if(x == 1) {
    var y = 2;
  }

  console.log(y);
}
foo(1);

// let example
console.log("let Example");
function foo(x) {
  if(x == 1) {
    let y = 2;
  }

  console.log(y);
}
foo(1);
