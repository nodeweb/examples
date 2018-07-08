const Router = require('koa-router');
const rp = require('request-promise');
const router = new Router()
const game = new Router()


router.get('/', async (ctx, next) => {
  
  //---设置session--
  ctx.session.name = 'mix'

  //-----设置html渲染---
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })

})



router.post('/post', async (ctx, next) => {

    //-----获取post的body数据---
    const mobile = ctx.request.body.mobile
    
    let ip = ctx.headers['x-forwarded-for']

    ctx.body = {mobile:mobile,ip:ip}
})


router.get("/test",async (ctx,next) => {

    //----获取url的query
    const t = ctx.query.t

    //----获取url的参数
    const team = ctx.params.team
    const agent = ctx.params.agent

    //-----获取session
    let name = ctx.session.name

   let ip = ctx.headers['x-forwarded-for']

   //------request请求内网数据----
   let href = "http://127.0.0.1:8080/api/getUserInfo"
   const option = {
      url:href,
      method:"POST",
      json: true,
      headers: {"content-type": "application/json"},
      body:{name:name ,ip:ip ,team:team ,agent:agent}
   }

   let body = await rp(option)

   ctx.body = body

})


game.use('/www/:team/:agent',router.routes(), router.allowedMethods())
module.exports = game



