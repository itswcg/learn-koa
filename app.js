const Koa = require('koa');

const app = new Koa();

// ctx是由koa传入封装的request和response的变量,  next是koa传入将要处理的下一个异步函数
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, world</h1>';
});

app.listen(5000);
console.log('app started at port 5000');
