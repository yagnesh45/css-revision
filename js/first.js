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
