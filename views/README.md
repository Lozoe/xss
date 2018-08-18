# Web安全-XSS的攻击和防范

#### 1.功能： 通过构建Node服务和建立一个评论功能，使用ajax实例演示XSS的攻击和预防。

- 文本由服务器端转义，客户端反转义，再DomParse，再过滤
- 使用encode.js和domparse.js第三方库对文本进行解码和DOM parse操作

#### 2.运行：
- `npm install`
- `npm start`安装依赖

#### 3.构建：
- `npm install -g express`
- `npm install -g express-generator`
- `express -e --git -f ./`
- `npm install`
-浏览器http://localhost:3000/

另： 
- 查询字符串要通过encodeURIComponent()进行编码，然后才放到URL的末尾
- 获取服务器的响应内容，先把响应内容的文本转化为JSON格式，再获取URL的name对应的value，最后解码。比如在Ajax的成功响应函数中可以这样写，`decodeURIComponent(JSON.parse(xhr.response).comment)`，其中xhr是一个XMLHttpRequest对象，comment是对应的查询字段的name名称
- 


# 什么是XSS
### 简介

跨站脚本攻击(Cross Site Scripting)，为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。恶意攻击者通常往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的, 还有另外一种产常见的就是CSRF(Cross-site request forgery)跨站点请求伪造。

### 主要分类

反射型：发出请求时，XSS代码出现在URL中，作为输入提交到服务器端，服务器端解析响应之后，XSS代码随着响应内容一起传回给浏览器，最后浏览器解析执行XSS代码。
存储型：存储型XSS和反射型XSS的差别在于,提交的代码会存储在服务器中(例如数据库,内存,文件系统等),下次请求页面时不用再提交XSS代码。
特点

1.耗时间
2.有一定几率不成功
3.没有响应的软件自动攻击
4.需要有一定的语言基础
5.这是一种被动的攻击手法
6.几乎所有的网站都存在Xss 谷歌，百度，QQ都有

### 其它的攻击

DoS(Denial of Service)拒绝服务攻击、DDoS(Distributed Denial of Service)分布式拒绝服务攻击
这两种攻击方式利用目标系统网络服务功能缺陷或者直接消耗其系统资源，使得该目标系统无法提供正常的服务。单一的DoS攻击一般是采用一对一方式的，而DDoS利用更多的傀儡机（肉鸡）来发起进攻，以比从前更大的规模来进攻受害者。
Server Limit DOS服务器限制拒绝服务攻击
比如： 攻击导致http request header过长而导致web server产生400或者4开头的一个错误。如果浏览器中这些数据保存在cookies中，会导致用户无法正常访问域名或者这个站点
XSS的反射型攻击演示
构建Node服务进行演示