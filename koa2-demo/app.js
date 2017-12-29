const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const convert = require('koa-convert');
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session');
const redisStore = require('koa-redis');
const client = require('./config/redisConf')

const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));


app.keys = ['X-Ui'];

const CONFIG = {
  store: redisStore(),
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 1000*60*60*6,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// --redis connect--
client.on('error',async (err,result) => {
    console.log('连接redis错误',err);
});
client.on('connect', async () => {
    console.log('连接redis服务成功');
});


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app