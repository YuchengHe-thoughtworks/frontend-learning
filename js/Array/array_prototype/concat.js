// 等价
const array = [1, 2, 3, 4];
const arr = array.concat(5);
const arr1 = array.concat([5]);
// concat方法不会修改原数组
console.log(array);
console.log(arr == arr1);


const arr2 = array.concat([5], 6);
