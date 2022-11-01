import { Foo } from "./p2_replacer_func.js";

const foo1 = new Foo('Mosh','box');
// (2)或者指定的 replacer 是【数组】，则可选择性地仅包含数组指定的属性。
const replacer = ['foundation', 'model'];
const bar = JSON.stringify(foo1, replacer);

// console.log(foo); // ReferenceError: foo is not defined
console.log(bar); // {"foundation":"Mozilla","model":"box"}

