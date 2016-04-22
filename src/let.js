"use strict";

let a = 10;

// What, Why, Which problem it solves
// What - gives might tighter scoping than 'var'

// var example
console.log("var Example");
function foo(x) {
  var y;
  if(x == 1)
    y = 2;

  console.log(y);
}
foo(1);
console.log(y);

// let example
console.log("var Example");
function foo(x) {
  let y;
  if(x == 1)
    y = 2;

  console.log(y);
}
foo(1);
console.log(y);