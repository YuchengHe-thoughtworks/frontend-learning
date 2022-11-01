const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// 根据搜索条件（查询）筛选数组项
function filterItems(arr, query) {
  return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // [ 'apple', 'grapes' ]
console.log(filterItems(fruits, 'an')); // [ 'banana', 'mango', 'orange' ]
