const Koa = require('koa');
const Router = require('koa-router');
const router = Router();

const app = new Koa();

//setting
app.env = app.env || '';
app.keys = '';
app.proxy= true;
app.subdomainOffset = 2

// app.use(async(ctx,next)=>{
//     if(ctx.request.path == '/'){
//         ctx.response.body = 'index page'
//     }else{
//         await next()
//     }
// })

router.get('/hello/:name',async(ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = 'hello  one'+name
})

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(ctx.state) //
    /**
             * {
         status: 200,
        message: 'OK',
        header: [Object: null prototype] {
            'content-type': 'text/plain; charset=utf-8',
            'content-length': '5',
            'x-response-time': '2'
        },
        body: 'hello'
        }
     */
    // console.log(ctx.require)
    console.log(rt + 1);
})

app.use(async (ctx, next) => {
    const start = Date.now()
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', 2)
})

// app.use(async ctx => {
//     ctx.body = 'hello'
// })
// 错误输出
app.on('error',err=>{
    log.error('server error',err,ctx)
})
app.use(router.routes())
app.listen(3000, ctx => {
    console.log('服务器启动')
})
// 可以开放多个端口！
app.listen(3002, ctx => {
    console.log('服务器启动')
})