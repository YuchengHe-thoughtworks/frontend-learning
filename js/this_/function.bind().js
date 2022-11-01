/*const obj = {
  foo() {
    return this;
  },
  bar: 1,
};

const foo2 = obj.foo;
const foo3 = foo2.bind(obj);
// Bind creates a new function that will force the this inside the function to be the parameter passed to bind().

console.log(foo3()); // obj
console.log(foo3); // [Function: bound foo]

console.log(obj.foo()); // obj
console.log(obj.foo); // [Function: foo]*/


const myButton = {
  content: 'OK',
  click() {
    console.log(this.content + ' clicked');
  }
};

myButton.click();
// OK clicked

const looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis
// undefined clicked

const boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton
// OK clicked
