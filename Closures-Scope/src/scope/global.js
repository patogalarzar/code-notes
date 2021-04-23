// Global Scope

var hello = "Hello";
// var hello = "Hello +";
let world = "Hello World";
// let world = "Hello +";

const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

// Bad practice declaring global vars

const helloWorldBadPractice = () => {
  globalVar = "I'm global.";
};
helloWorldBadPractice();
console.log(globalVar);

const anotherFunctionBadPractice = () => {
  var localVar = (globalVar = "I'm global.");
};
anotherFunctionBadPractice();
console.log(globalVar);
