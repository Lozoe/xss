var express = require("express");
var router = express.Router();

var comments = {};

//编码，转为html转义字符
function html_encode(str) {
  var result = "";
  if (str.length == 0) return "";
  result = str.replace(/&/g, "&amp;");
  result = result.replace(/</g, "&lt;");
  result = result.replace(/>/g, "&gt;");
  result = result.replace(/\s/g, "&nbsp;");
  result = result.replace(/\'/g, "&#39;");
  result = result.replace(/\"/g, "&quot;");
  result = result.replace(/\n/g, "<br>");
  return result;
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/comment", function(req, res, next) {
  // 保存数据 数据库 这里以缓存写
  comments.v = html_encode(req.query.comment);
});

// 获取评论
router.get("/getComment", function(req, res, next) {
  // 保存数据 数据库 这里以缓存写
  res.json({
    comment: comments.v
  });
  // res.json({
  //   comment: '<p onclick="alert(1)" style="background-color:red">123</p>'
  // })
  console.log(comments);
});

module.exports = router;
