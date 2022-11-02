// 提供初始值 initialValue 通常更安全，
// 正如下面的例子，如果没有提供 initialValue，
// 则 reduce 方法会因数组长度的不同（大于 1、等于 1、等于 0）而有不同的表现：

const getMax = (a, b) => Math.max(a, b);
// 【一】callback is invoked调用 for each element in the array starting at index 0
[1, 10].reduce(getMax, 50); // 50
[    50].reduce(getMax, 10); // 50

// 【二】callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// 【三】callback is not invoked

// 数组仅有一个元素（无论位置如何）并且没有提供初始值 initialValue，那么此唯一值将被返回且 callbackfn 不会被执行。
[    50].reduce(getMax); // 50
// 提供 initialValue 但是数组为空，那么此唯一值将被返回且 callbackfn 不会被执行。
[      ].reduce(getMax, 1); // 1
// 如果数组为空且未指定初始值 initialValue，则会抛出 TypeError。
[      ].reduce(getMax); // TypeError: Reduce of empty array with no initial value

