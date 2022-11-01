const str = ' coco nuts \n';

console.log(`--${str}--`);

// trim()方法的作用是:删除字符串【两端的whitespace】
// 这个上下文中的whitespace是所有空白字符(空格、制表符、无空格等)和所有行结束符字符(LF、CR等)。
console.log(`-${str.trim()}-`);

const str1 = ' coconuts \t';
console.log(`--${str1}--`);
console.log(`-${str1.trim()}-`);

let [a, b] = [1, 2, 3];
console.log(a,b); // 1 2
