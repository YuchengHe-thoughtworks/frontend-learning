## 语法

JSON.stringify(value[, replacer [, space]])

## 参数

value replacer(可选) space(可选)

![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_Sd13mq/截屏2022-10-25 14.22.26.png)
## 返回值

一个表示给定值的 JSON 字符串。

## 异常

1.当在循环引用时会抛出异常TypeError ("cyclic object value")（循环对象值）

2.当尝试去转换 BigInt 类型的值会抛出TypeError ("BigInt value can't be serialized in JSON")（BigInt 值不能 JSON 序列化）.
