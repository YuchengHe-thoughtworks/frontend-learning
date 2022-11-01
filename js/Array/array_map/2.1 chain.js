const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); // [ 1, 2, 3 ]
// the const filtered is only used in the following line
// SO we don't have to explicitly store the result of this statement inside a separate constant
const items = filtered.map(n => ({value: n}) ); // [ { value: 1 }, { value: 2 }, { value: 3 } ]

// .map()&.filter() NOT change the old array
// We can call .map()&.filter() one after another in a chain

// CHAIN
numbers.filter(n => n >= 0).map(n => ({value: n}) );

// code clean: 每个方法都单独写一行
numbers
  .filter(n => n >= 0)
  .map(n => ({value: n}) );

// Finally we store the result of this statement in the constant items1
const items1 = numbers
  .filter(n => n >= 0)
  .map(n => ({value: n}) );

console.log(items1); // [ { value: 1 }, { value: 2 }, { value: 3 } ]

const items2 = numbers
  .filter(n => n >= 0) // [ 1, 2, 3 ]
  .map(n => ({value: n}) ) // [ { value: 1 }, { value: 2 }, { value: 3 } ]
  .filter(obj => obj.value > 1) // [ { value: 2 }, { value: 3 } ]
  .map(obj => obj.value) // [ 2, 3 ]
console.log(items2);
