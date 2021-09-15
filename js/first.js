// Program 1: simple function program
/************************************************
var number = 15;

function square(num) {
  ans = num * num;
  return ans;
}

var answer = square(number);
console.log("%c" + answer, "font-weight:bold; font-size:2rem; color:green;");
***********************************************/

// Program 2: for understanding the variable scope
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


// Program 3: example of temporal dead zone
/***********************************************

// hoisting of variable b (accessing value of b before being initialized)
console.log(b);
// the time between variable is hoisted and variable being initialized in program is
//    when the variable declared using 'let' or 'const' is put into temporal dead zone.
// anything above initialization of such variables is temporal dead zone for those variables.
let b = 100;
************************************************/

// Program 4: example of closures
// Closure is function which bundles along with its lexical environment.
// We can access outer function's scope from inner closure function.
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

// Program 5: Example of setTimeout() function
// setTimeout() stores the code in different memory location along with 
//  its lexical refrences to veriables and functions and will execute them
//  the code when specified timer gets expired.

// How setTimeout() is executed:
  // When the timer specified in setTimeout() expires, The callback function statement
  // written inside the setTimeout() function is put into the "Callback Queue".
  // This queue stores the function statement. 
  // The "event loop" tries to search if global execution context has completed 
  // its execution, if it is done, then checks if there is any function available in 
  // callback queue, if there is a function found in a queue, it will push this 
  // function to call stack in javascript engine to execute it.


// Note: What are MicroTasks in JavaScript?
  // the callback functions which come through promises and mutation observer 
  // (Observes the changes in DOM tree) are Microtasks.
  // Such tasks are stores in MicroTasks Queue, and this queue
  // has higher priority than callback queue to be pushed by event loop in 
  // call stack for executing.

/* ********************************************
function x() {
  for (var i = 0; i < 5; i++) {
    function closure(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    closure(i);
  }

  console.log("Hello World!");
}

x();


// Another Example

function x() {

  function inner1() {
    console.log("Inner one:" + i);
  }

  function inner2() {
    console.log("Inner two");
  }

  var i = 10;
  return inner1;
}

x()();  // using double parantheses we can call the returned closure

************************************************/


// Examples: some function related terms
/***********************************************

// Function Statement a.k.a Function Declaration

function temp() {
  console.log("Nothing");
}

// Function Expression - Assigning function to a variable
//  Difference between func statement and expression is that
//  function statement can be before defining, but in function expression,
//  function is assigned to a variable only at the time of assignment.
//  So, if we call below function using b() above the declaration of
//  function expression, It will throw error of TypeError: b is not function.

var b = function () {
  console.log("Nothing again");
}

// Anonymous functions - Functions without name
//  specifically used when function needs to be used value or values.
//  We can use such functions in function expressions, but not in
//  function statements


// Named function expression - instead of using anonymous function
//  in the function expression, if use function with a name.

// Difference between parameters and arguments?
// Parameters are variables passed in function definition
// Arguments are variables passed during function calling.

function func(param1, param2,) // These are Parameters
{
  // ....
}

func(arg1, arg2); // These are arguments


// First Class functions a.k.a functions as first class citizens -
//  an ability to use functions as values.
//  in JavaScript, we can use function as arguments and we can also
//  return a function from another function.

// Passing function as parameter

function a(funcParam) {
  console.log(funcParam);
}

a(function () {
  console.log("This is a function passed as argument");
});

// Returning a function

var b = function () {
  return function returnFunc() {
    console.log("Function to be returned");
  }
}

var returnFuncVal = b();
returnFuncVal();

***********************************************/


// Program 6: Event listener
//  Example: Adding event listener to a button click.

/***********************************************
document.getElementById("test-button").addEventListener("click", function () {
  console.log("Yay! button is clicked");
});

***********************************************/