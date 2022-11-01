## JSON 定义

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，易于人类读写，也易于机器解析和生成。

它的产生是基于 JavaScript 编程语言的一个子集。

JSON 采用完全独立于语言的文本格式,但是也采用了为编程人员所熟知的 C 语言家族的约定。
=> 这些特性使 JSON 成为理想的数据交换语言。


JSON 已经成为 Web 和移动应用不同组件间、同第三方服务间数据交换的标准格式。
在应用内部， JSON 也是广泛使用的格式，它可以用来存储设置信息、本地化、翻译文件或其他数据。

## JSON对象一般是这样的：
这里定义了一个包含键-值对的对象。

<img height="150px" src="../../../../../../../var/folders/rm/z0rz7xz94h5cydphd9bp71qr0000gn/T/TemporaryItems/NSIRD_screencaptureui_QmWdw8/截屏2022-10-30 15.33.56.png" width="400px"/>

⭐JSON 和 JS 对象字面上最大的区别在于 JSON 更严格，️必须使用“双引号”包裹键和字符串值。

_这两种类型都可以:_

（1）使用JSON.stringify()序列化成一个字符串，

（2）使用用JSON.parse()反序列化一个有效的JSON对象字符串。


PS: JSONP（带填充和前缀的 JSON ）
