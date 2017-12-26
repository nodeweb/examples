const router = require('koa-router')()
const User = require('../models/sqldata').User
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const redis = require('../config/redisConf')

router.get('/', async (ctx, next) => {
  ctx.session.name = 'mix'
  let data = {firstName:'aa',lastName:'bb'}
  await redis.setex('hao123',10,JSON.stringify(data))
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })

})

router.get('/douser', async (ctx, next) => {
   let a = ctx.query.a ? ctx.query.a : 'noneA'
   let b = ctx.query.b ? ctx.query.b : 'noneB'
   let arr = [{firstName:a},{lastName:b}]
   let oldUser = await User.findOne({where:{[Op.or]:arr}})
   let data = {firstName:a,lastName:b}

   if(oldUser){
     ctx.body = '用户已存在!'
   }else{

     let newUser = await User.create(data)
     //data['status'] = '新建用户成功'
     ctx.body = '新建用户成功'
   }
})

router.get('/getuser', async (ctx, next) => {
  let data = await User.findAll()
  ctx.body = data
})

router.get('/gss',async (ctx,next) => {
   let data = await redis.get('hao123')
   ctx.body = 'data='+ data
})

module.exports = router