export default function union(...arrays) {
  // const arr = arrays[0].concat(...arrays[arrays.length-1]);
  // return arr.filter((v, i, self) => i === self.indexOf(v));
  // const length = arrays.length;
  // return arr;
  // return arr.filter((v, i, self) => i === self.indexOf(v));
  for ( let i=0; i<arrays.length; i++ ) {
    console.log(arrays[i].concat(arrays[i+1]))
  }
}

const afterUnion = union([1,2],[3],[5],[6]);
console.log(afterUnion);

/*const afterInter = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(afterInter);

const afterDiff = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
console.log(afterDiff);*/

const arr = [1,2].concat([1,2,3]);
console.log(arr.filter((v,i,self) => i === self.indexOf(v)));
// ⚠️indexOf()不能识别NaN

const arr1 = [1,2,4,3,2,1];
console.log(arr1.indexOf(3)); // 3
console.log(arr1.indexOf(2)); // 1 first
