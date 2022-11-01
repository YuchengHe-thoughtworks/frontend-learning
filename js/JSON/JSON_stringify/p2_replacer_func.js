// 【replacer参数】
// (1)如果指定了一个 replacer 【函数】，则可以选择性地替换值，
// 作为函数，它有两个参数，键（key）和值（value），它们都会被序列化。
// 在开始时，replacer 函数会被传入一个空字符串作为 key 值，代表着要被 stringify 的这个对象。
// 随后每个对象或数组上的属性会被依次传入。
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7
};

export {
  class Foo {
    constructor(foundation, model) {
      this.foundation = foundation;
      this.model = model;
    }
  }
}

console.log(foo);

function replacer(key,value) {
  if (typeof value === "string") {
    return undefined;
    // 如果返回 undefined，该属性值不会在 JSON 字符串中输出。
  }
  return value;
}

const bar = JSON.stringify(foo, replacer);
console.log(bar); // {"week":45,"month":7}
