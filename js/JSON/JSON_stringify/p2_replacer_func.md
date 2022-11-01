# [replacer参数]

## 当该参数为一个函数时

此时应有2个参数：key, value ，它们都会被序列化。

在开始时，replacer 函数会被传入一个空字符串作为 key 值，代表着要被 stringify 的这个对象。随后每个对象或数组上的属性会被依次传入。

函数应当返回 JSON 字符串中的 value, 如下所示：
![](../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_LLjwDE/截屏2022-10-25 14.10.37.png)
