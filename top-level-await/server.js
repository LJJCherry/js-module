//服务器入口文件
const Koa = require('koa')
const static = require('koa-static');

const app = new Koa()

app.use(static(__dirname))

app.listen(3001, () => {
  console.log('服务器启动')
})