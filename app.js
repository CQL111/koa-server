const Koa = require('koa')
const controller = require('koa-route');
const app = new Koa();

var service = require('./service/WebAppService.js')
app.use(controller.get('/ajax/search',function*(){
    this.set('Cache-Control','no-cache')
    this.set('Access-Control','*')
    var querystring = require('querystring')
    var params = querystring.parse(this.req._paesedUrl.query)

    var key = params.key;
    var start = params.start;
    var end = params.end;
    this.body = yield service.get_search_data(key,start,end)
}))
app.use(async ctx=>{
    ctx.body = 'hello'
    console.log(123)
})

app.listen(3002)
console.log('koa server start')