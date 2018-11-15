const Koa = require('koa');
// const router = require('koa-router')(); //返回函数
const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

// ctx是由koa传入封装的request和response的变量,  next是koa传入将要处理的下一个异步函数
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, world</h1>';
// });

// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}</h1>`;
// });

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Hello, world</h1>';
// });

app.use(bodyParser());
app.use(controller());

app.listen(5000);
console.log('app started at port 5000');
