// JSON.parse() 方法用来【解析 JSON 字符串】，构造由字符串描述的 JavaScript 值或对象。
// 提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换 (操作)。

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
