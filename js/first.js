// simple function program
/************************************************
var number = 15;

function square(num) {
  ans = num * num;
  return ans;
}

var answer = square(number);
console.log("%c" + answer, "font-weight:bold; font-size:2rem; color:green;");
***********************************************/

// program for understanding the variable scope
/***********************************************
var x = "global";

funA();
funB();

console.log(x);

function funA() {
  var x = "local fun A";
  console.log(x);
}

function funB() {
  var x = "local fun B";
  console.log(x);
}
************************************************/


// program 3: example of temporal dead zone
/***********************************************

// hoisting of variable b (accessing value of b before being initialized)
console.log(b);
// the time between variable is hosted and variable being initialized in program is
//    when the variable declared using 'let' or 'const' is put into temporal dead zone.
// anything above initialization of such variables is temporal dead zone for those variables.
let b = 100;
************************************************/

// Program 4: example of closures
// Closure is function which bundles along with the lexical environment.
// It can access outer function's scope from inner closure function.
/* ********************************************
// Example 1:
function x() {
  var a = 7;

  function y() {  // Closure function
    console.log("Variable from x():" + a);
  }
  y();
}
x();

// Example 2: Returning a closure function in a variable.
function x() {
  var a = 8;

  function y() {
    console.log("Function Y:" + a);
  }

  console.log("Function X");
  return y;  // will return the whole fun y()
}

var func = x();
console.log(func);
func();

//  Example 3: One level deeper
function x() {
  var a = 100;

  function y() {
    var b = 400;

    function z() {
      console.log("Function Z:", a, b);
    }
    z();
  }
  y();
}

x();

***********************************************/

