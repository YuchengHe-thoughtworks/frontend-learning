const str = 'coconuts';
console.log(str[0]); // c
console.log(str[100]); // undefined
console.log(str.length); // 8

// 获取字符串 JS中有三种获取字符串的方法：substring、substr 和 slice。

// 1.str.slice(start [, end])
// 返回字符串从 start 到（但不包括）end 的部分。

// 如果没有第二个参数，slice 会一直运行到字符串末尾：
console.log(str.slice(5)); // uts

// beginIndex如果为负数，则被视为str.length + beginIndex
// (-3)+8=5 ->str.slice(5,7)
console.log(str.slice(-3,7)); // ut
console.log(str.slice(5,7)); // ut

console.log(str.slice(100,7)); // ''
console.log(typeof str.slice(100,7)); // string

console.log(str.slice(4,7)); // nut
console.log(str.slice(4,8)); // nuts
console.log(str.slice(4,100)); // nuts

const guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // 客人清单，多行
