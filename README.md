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