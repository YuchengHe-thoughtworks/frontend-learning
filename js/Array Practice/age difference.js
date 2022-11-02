// 求最大和最小的家庭成员之间的年龄差，并返回他们各自的年龄和年龄差

// T1.from方法/map方法拿到数组中每个对象的name属性值 -> 存到一个数组arr中
// T2.arr.reduce(Math.min/max) -> 分别拿到min,max
// T3.计算年龄差 -> 拿到diff
// T4.[min, max, diff]

const input = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];
// 但是写的时候发现 sort方法直接排序之后取首位元素即可拿到最大最小值，无需调用Math方法
const ages = input.map(person => person.age).sort((x, y) => x - y);
const min = ages[0];
const max = ages[ages.length-1];
const diff = max - min;
const result = [min, max, diff];
console.log(result); // [ 13, 67, 54 ]

/************************************************/
const ages1 = input.map(person => person.age)
const result1 = [Math.min(...ages1), Math.max(...ages1), Math.max(...ages) - Math.min(...ages)];
