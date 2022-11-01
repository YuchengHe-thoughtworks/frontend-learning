/*
\d digit数字等价[0-9]
\s 空白符包括换行 symbol符号
\S 非空白符
\n 换行
\w 等价于 [A-Za-z0-9_]
\W 等价于 [^A-Za-z0-9_]
/i 忽略大小写
/g 全文查找
. 匹配除换行符(\n, \r)之外的任何单个字符 等价于 [^\n\r]
* 任意长度 等价于{0,}
+ 长度大于1位 等价于{1,}
? 长度0-1位 等价于{0,1}
.*? 非贪婪匹配，找到一个就停止 /\d.*?/ 表示匹配到第一个数字就停止
// a.*?xxx 可以匹配 abxxx  axxxxx  abbbbbxxx
[] 组合[0-9],表示0-9；[0-9a-z.$],表示0-9或者a-z或者.或者$
{} 长度限制 {0-9},表示长度0-9；{5},表示长度5；{1,}表示长度>1
^ 以什么开头 ps:如果出现在[]中，表示非，取反的意思
$ 以什么结尾
[\u4e00-\u9fa5] 匹配中文
() 分组group
*/

// 1.1 校验手机号 反正先把/^$/敲好
const telephone = '13333333333';
// 以1开头，后面再跟10位数字（11位）
console.log(/^1\d{10}$/.test(telephone));
// 1.2 校验座机号
const landline = '020-88888888';
console.log(/^\d{3}-\d{8}$/.test(landline));

// 2. 校验4位验证码
const code = '4564';
console.log(/^\d{4}$/.test(code));

// 3. 邮箱
const email = 'Q15555555@qq.com';
// [a-z0-9_]{1,20}  q15555555
// [a-z0-9]{1,10}   qq
// 考虑到可能有.com.cn   [.a-z0-9]
// 并且结尾不能是.  [^.]
// 忽略大小写  /i
console.log('--' + /^[a-z0-9_]{1,20}@[a-z0-9]{1,10}[.a-z0-9]+[^.]$/i.test(email));
// 结尾＋可写可不写
console.log('--' + /^[a-z0-9_]{1,20}@[a-z0-9]{1,10}[.a-z0-9]+[^.]+$/i.test(email));

// 4. 校验名字必须为中文
const usrName = '吕靖';
console.log(/^[\u4e00-\u9fa5]{2,5}$/.test(usrName));

// 5. 获取url参数
// 【动态正则】new一个RegExp对象：把字符串传进去，然后把这个字符串编译成我们需要的正则
function querystring(url, key) {
  const reg = new RegExp(key + '=(.*?)(&|$)')
  // 'a=(.*?)&'  找a:找到&就终止  .*?匹配的1就是我们想要的
  // 'b=(.*?)$'  找b:找到结束标记就终止  .*?匹配的2就是我们想要的
  // const reg = new RegExp('a=(.*?)(&|$)')  匹配到2个：(.*?)以及(&|$)
  // const reg = new RegExp('b=(.*?)(&|$)')
  const result = url.match(reg)

  console.log('--' + result); // --a=1&,1,&

  return result ? result[1] : null // result[1] 第一个匹配的(.*?)才是我们想要的
}
console.log(querystring('http://xxx.xxx.com/?a=1&b=2','a')) // 1
console.log(querystring('http://xxx.xxx.com/?a=1&b=2','b')) // 2

// 过滤html标签
// 6. 把外链全部删除，只保留非外链的部分
const strHtml = `xxxxx<a href="http://www.baidu.com" style="color: chocolate">baidu.com</a>
<a href="http://abc.com">baidu.com</a>`

console.log(strHtml.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/g,(a, group1, group2) => {
  return group1.indexOf('http://www.baidu.com') >=0 ? group2: a
}));
// xxxxxbaidu.com
// <a href="http://abc.com">baidu.com</a>

// 7. 模板替换 数据格式化
const text = '{name}说，今天天气{desc}';
const obj = {
  name: '吕靖',
  desc: '真好'
}
console.log(text.replace(/\{(.*?)\}/g,(a, group1) => {
  return obj[group1]
}));

// 8. 去除多余的 开头或者|结尾 的空格
const str2 = ' 你 好 ';
console.log('--' + str2.replace(/^\s+|\s$/g,'') + '--')
console.log('--' + str2.replace(/^\s+|\s+$/g,'') + '--')
