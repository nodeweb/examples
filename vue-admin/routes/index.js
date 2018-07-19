const Router = require('koa-router')
const rp = require('request-promise')
const router = new Router()
const fs = require("fs")
const md5 = require("md5")


//----测试调用微信支付---
router.get("/test_order",async (ctx,next) => {
    let dt = new Date()
    let tm = dt.getTime()
    let version = "1.0"
    let customerid = "100014"
    let sdorderno = tm
    let total_fee = 0.01
    let paytype = " icbcpay1"
    let notifyurl = "http://app.sixtv.cn/notifyurl/" + tm
    let returnurl = "http://app.sixtv.cn/returnurl/" + tm
    let key = "db5b2d5654c88208098e2fd33390a0663809fef5"
    let str = `version=${version}&customerid=${customerid}&total_fee=${total_fee}&sdorderno=${sdorderno}&notifyurl=${notifyurl}&returnurl=${returnurl}&${key}`

    let sign = md5(str)

    await ctx.render("test_icbcpay",{
      version:version,
      customerid:customerid,
      sdorderno:sdorderno,
      total_fee:total_fee,
      paytype:paytype,
      notifyurl:notifyurl,
      returnurl:returnurl,
      sign:sign,
    })
})

router.post("/notifyurl/:id",async (ctx,next)=>{
    let body = ctx.request.body
    console.log(body)
    ctx.body = "success"
})

router.get("/returnurl/:id",async (ctx,next)=>{
    ctx.body = ctx.param.id
})


//-----设置验证权限函数-----
const AuthUser = (ctx) => {
  let user = ctx.session.user
  console.log("==========team===user=============")
  if(user == undefined) ctx.session.user = "";
  if(!user || user == undefined ) return ctx.redirect("/login")
}


router.get('/redpack', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user


  await ctx.render('redpack', {
    title: 'Hello Koa 2!',
    index:"redpack",
    user:user,
  })

})



router.post('/redpack', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  let href = "http://127.0.0.1:9090/api/55/getmoneyset"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team}
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    console.log("========获取team信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})


router.post('/redpack/m10', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  let a_scale = ctx.request.body.s10A
  let a_money = ctx.request.body.m10A
  let b_scale = ctx.request.body.s10B
  let b_money = ctx.request.body.m10B
  let c_scale = ctx.request.body.s10C
  let c_money = ctx.request.body.m10C
  let d_scale = ctx.request.body.s10D
  let d_money = ctx.request.body.m10D
  let e_scale = ctx.request.body.s10E
  let e_money = ctx.request.body.m10E
  let f_scale = ctx.request.body.s10F
  let f_money = ctx.request.body.m10F
  let g_scale = ctx.request.body.s10G
  let g_money = ctx.request.body.m10G
  let h_scale = ctx.request.body.s10H
  let h_money = ctx.request.body.m10H

  let href = "http://127.0.0.1:9090/api/55/savem10"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team,
      a_scale:a_scale,a_money:a_money,
      b_scale:b_scale,b_money:b_money,
      c_scale:c_scale,c_money:c_money,
      d_scale:d_scale,d_money:d_money,
      e_scale:e_scale,e_money:e_money,
      f_scale:f_scale,f_money:f_money,
      g_scale:g_scale,g_money:g_money,
      h_scale:h_scale,h_money:h_money,
    }
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    console.log("========修改名m10信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})


router.post('/redpack/m20', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  let a_scale = ctx.request.body.s20A
  let a_money = ctx.request.body.m20A
  let b_scale = ctx.request.body.s20B
  let b_money = ctx.request.body.m20B
  let c_scale = ctx.request.body.s20C
  let c_money = ctx.request.body.m20C
  let d_scale = ctx.request.body.s20D
  let d_money = ctx.request.body.m20D
  let e_scale = ctx.request.body.s20E
  let e_money = ctx.request.body.m20E
  let f_scale = ctx.request.body.s20F
  let f_money = ctx.request.body.m20F
  let g_scale = ctx.request.body.s20G
  let g_money = ctx.request.body.m20G
  let h_scale = ctx.request.body.s20H
  let h_money = ctx.request.body.m20H

  let href = "http://127.0.0.1:9090/api/55/savem20"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team,
      a_scale:a_scale,a_money:a_money,
      b_scale:b_scale,b_money:b_money,
      c_scale:c_scale,c_money:c_money,
      d_scale:d_scale,d_money:d_money,
      e_scale:e_scale,e_money:e_money,
      f_scale:f_scale,f_money:f_money,
      g_scale:g_scale,g_money:g_money,
      h_scale:h_scale,h_money:h_money,
    }
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    console.log("========修改名m20信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})


router.post('/redpack/m50', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  let a_scale = ctx.request.body.s50A
  let a_money = ctx.request.body.m50A
  let b_scale = ctx.request.body.s50B
  let b_money = ctx.request.body.m50B
  let c_scale = ctx.request.body.s50C
  let c_money = ctx.request.body.m50C
  let d_scale = ctx.request.body.s50D
  let d_money = ctx.request.body.m50D
  let e_scale = ctx.request.body.s50E
  let e_money = ctx.request.body.m50E
  let f_scale = ctx.request.body.s50F
  let f_money = ctx.request.body.m50F
  let g_scale = ctx.request.body.s50G
  let g_money = ctx.request.body.m50G
  let h_scale = ctx.request.body.s50H
  let h_money = ctx.request.body.m50H

  let href = "http://127.0.0.1:9090/api/55/savem50"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team,
      a_scale:a_scale,a_money:a_money,
      b_scale:b_scale,b_money:b_money,
      c_scale:c_scale,c_money:c_money,
      d_scale:d_scale,d_money:d_money,
      e_scale:e_scale,e_money:e_money,
      f_scale:f_scale,f_money:f_money,
      g_scale:g_scale,g_money:g_money,
      h_scale:h_scale,h_money:h_money,
    }
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    console.log("========修改名m50信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})


router.post('/redpack/m100', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  let a_scale = ctx.request.body.s100A
  let a_money = ctx.request.body.m100A
  let b_scale = ctx.request.body.s100B
  let b_money = ctx.request.body.m100B
  let c_scale = ctx.request.body.s100C
  let c_money = ctx.request.body.m100C
  let d_scale = ctx.request.body.s100D
  let d_money = ctx.request.body.m100D
  let e_scale = ctx.request.body.s100E
  let e_money = ctx.request.body.m100E
  let f_scale = ctx.request.body.s100F
  let f_money = ctx.request.body.m100F
  let g_scale = ctx.request.body.s100G
  let g_money = ctx.request.body.m100G
  let h_scale = ctx.request.body.s100H
  let h_money = ctx.request.body.m100H

  let href = "http://127.0.0.1:9090/api/55/savem100"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team,
      a_scale:a_scale,a_money:a_money,
      b_scale:b_scale,b_money:b_money,
      c_scale:c_scale,c_money:c_money,
      d_scale:d_scale,d_money:d_money,
      e_scale:e_scale,e_money:e_money,
      f_scale:f_scale,f_money:f_money,
      g_scale:g_scale,g_money:g_money,
      h_scale:h_scale,h_money:h_money,
    }
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    console.log("========修改名m100信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})

router.post("/redpack/makeredpack",async (ctx,next)=>{
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID
  let red = ctx.request.body.red

  let href = "http://127.0.0.1:9090/api/55/remakeredpack"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers:{"content-type": "application/json"},
    body:{red:red,team:team}
  }

  try {
    const body = await rp(option)
    ctx.body = body
  } catch (e) {
    ctx.body = {code:404}
  }
})





router.get('/money', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user



  await ctx.render('money', {
    title: 'Hello Koa 2!',
    index:"money",
    user:user,
  })

})


router.post("/money/geteveryday",async (ctx,next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID
  let time = ctx.request.body.time

  let href = "http://127.0.0.1:9090/api/55/geteverydaymoney"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers:{"content-type": "application/json"},
    body:{time:time,team:team}
  }

  try {
    const body = await rp(option)
    console.log(body)
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }

})


router.get('/system', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  await ctx.render('system', {
    title: 'Hello Koa 2!',
    index:"system",
    user:user,
  })
})

router.post('/system', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  user.Pass = "";

  let href = "http://127.0.0.1:9090/api/55/checkuser"

  const option = {
    url:href,
    method:"POST",
    json:true,
    headers: {"content-type": "application/json"},
    body:{name:user.User,pass:user.Pass}
  }

  try {
    const body = await rp(option)
    console.log("========请求team信息=结果=======")
    console.log(body)
    if(body.code != 200){
      ctx.body = {code:404}
    }else{
      ctx.session.user = body.team
      user = body.team
      user.Pass = ""
      user.code = 200
      user.web_statu = body.web_statu
      ctx.body = user
    }
  } catch (e) {
    console.log("========获取team信息失败========")
    console.log(e)
    ctx.body = {code:500}
  }

})

router.post("/system/setwebstatu",async (ctx,next)=>{
   AuthUser(ctx)
   let user = ctx.session.user
   let team = user.ID

  let open = ctx.request.body.web_statu

  let href = "http://127.0.0.1:9090/api/"+team+"/setwebstatu"

  const option = {
    method: 'POST',
    uri: href,
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team ,is_web_open:open}
  }

  try {
    const body = rp(option)
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }

})

router.post('/system/qrbgupload', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  const file = ctx.request.files.file;
  const reader = fs.createReadStream(file.path);

  let href = "http://127.0.0.1:9090/api/"+team+"/qrbgupload"

  const option = {
    method: 'POST',
    uri: href,
    formData: {
      name: "file",
      file: {
        value: reader,
        options: {
          filename: file.name,
          contentType: 'image/jpg'
        }
      }
    }
  }

  try {
    const body = await rp(option)
    if(body.code == 200){
      ctx.session.user.QrImg = body.imgUrl
    }
    ctx.body = body
  } catch (e) {
    ctx.body = {code:404}
  }

})


router.post('/system/qunimgupload', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID

  const file = ctx.request.files.file;
  const reader = fs.createReadStream(file.path);

  let href = "http://127.0.0.1:9090/api/"+team+"/qunimgupload"

  const option = {
    method: 'POST',
    uri: href,
    formData: {
      name: "file",
      file: {
        value: reader,
        options: {
          filename: file.name,
          contentType: 'image/jpg'
        }
      }
    }
  }

  try {
    const body = await rp(option)
    console.log(body)
    if(body.code == 200){
      ctx.session.user.QqImg = body.imgUrl
    }
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }

})


router.post('/system/tixian', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID
  let open = ctx.request.body.open

  let href = "http://127.0.0.1:9090/api/"+team+"/txupdate"

  const option = {
    method: 'POST',
    uri: href,
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team ,is_transfers:open}
  }

  try {
    const body = rp(option)
    if(body.code == 200){
      ctx.session.user.QqImg = open
    }
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }
})


router.post('/system/fenyong', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID
  let numA = ctx.request.body.numA;
  let numB = ctx.request.body.numB;
  let numC = ctx.request.body.numC;

  let href = "http://127.0.0.1:9090/api/"+team+"/scaleupdate"

  const option = {
    method: 'POST',
    uri: href,
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team ,one_scale:numA,two_scale:numB,three_scale:numC}
  }

  try {
    const body = rp(option)
    if(body.code == 200){
      ctx.session.user.OneScale = numA
      ctx.session.user.TwoScale = numB
      ctx.session.user.ThreeScale = numC
    }
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }
})


router.post('/system/domain', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user
  let team = user.ID
  let wxDo = ctx.request.body.wxDo
  let qrDo = ctx.request.body.qrDo
  let webDo = ctx.request.body.webDo

  let href = "http://127.0.0.1:9090/api/"+team+"/domainupdate"

  const option = {
    method: 'POST',
    uri: href,
    json:true,
    headers: {"content-type": "application/json"},
    body:{team:team ,qr_domain:qrDo,web_domain:webDo,wx_domain:wxDo}
  }

  try {
    const body = rp(option)
    if(body.code == 200){
      ctx.session.user.QrDomain = qrDo
      ctx.session.user.WebDomain = webDo
      ctx.session.user.WxDomain = wxDo
    }
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }
})

router.get('/order', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  await ctx.render('order', {
    title: 'Hello Koa 2!',
    index:"order",
    user:user,
  })
})

router.post('/order', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  let page = ctx.request.body.page
  let num = ctx.request.body.num
  let team = user.ID

  let href = "http://127.0.0.1:9090/api/"+team+"/getorder"
  const option = {
    url:href,
    method:"POST",
    json: true,
    headers: {"content-type": "application/json"},
    body:{team:team ,page:page,num:num}
  }

  try{
    let body = await rp(option)
    console.log(body.msg)
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {code:404}
  }
})


router.get('/agent', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  await ctx.render('agent', {
    title: 'Hello Koa 2!',
    index:"agent",
    user:user,
  })

})

router.post("/agent",async (ctx,next)=>{
   AuthUser(ctx)
   const user = ctx.session.user

   const page = ctx.request.body.page
   const num  = ctx.request.body.num
   const team = user.ID

   let href = "http://127.0.0.1:9090/api/"+ team + "/getagent"
   const option = {
     url:href,
     method:"POST",
     json:true,
     headers:{"content-type": "application/json"},
     body:{page:page,num:num,team,team}
   }

   try {
     const body = await rp(option)
     console.log(body.msg)
     ctx.body = body
   } catch (e) {
     console.log(e)
     ctx.body = {
       code:404,
     }
   }

})



router.get('/cash', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  await ctx.render('cash', {
    title: 'Hello Koa 2!',
    index:"cash",
    user:user,
  })

})


router.post("/cash",async (ctx,next)=>{
  AuthUser(ctx)
  const user = ctx.session.user

  const page = ctx.request.body.page
  const num  = ctx.request.body.num
  const team = user.ID

  let href = "http://127.0.0.1:9090/api/"+ team + "/getcash"
  const option = {
    url:href,
    method:"POST",
    json:true,
    headers:{"content-type": "application/json"},
    body:{page:page,num:num,team,team}
  }

  try {
    const body = await rp(option)
    console.log(body.msg)
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {
      code:404,
    }
  }

})


router.get('/sendpack', async (ctx, next) => {
  AuthUser(ctx)
  let user = ctx.session.user

  await ctx.render('sendpack', {
    title: 'Hello Koa 2!',
    index:"sendpack",
    user:user,
  })

})


router.post("/sendpack",async (ctx,next)=>{
  AuthUser(ctx)
  const user = ctx.session.user

  const page = ctx.request.body.page
  const num  = ctx.request.body.num
  const team = user.ID

  let href = "http://127.0.0.1:9090/api/"+ team + "/getsendpack"
  const option = {
    url:href,
    method:"POST",
    json:true,
    headers:{"content-type": "application/json"},
    body:{page:page,num:num,team,team}
  }

  try {
    const body = await rp(option)
    console.log(body.msg)
    ctx.body = body
  } catch (e) {
    console.log(e)
    ctx.body = {
      code:404,
    }
  }

})


router.get("/login",async (ctx,next)=>{
   let user = ctx.session.user
   if(user){
      return ctx.redirect("/money")
   }else{
      await ctx.render("login",{
        title:"登录",
      })
   }
})

router.post("/login",async (ctx,next)=>{
   let name = ctx.request.body.name
   let pass = ctx.request.body.pass

   if(!name || !pass){
     return ctx.redirect("/login")
   }

   let href = "http://127.0.0.1:9090/api/55/checkuser"

   const option = {
     url:href,
     method:"POST",
     json:true,
     headers: {"content-type": "application/json"},
     body:{name:name,pass:pass}
   }

   try {
      const body = await rp(option)
      console.log("========请求team信息=结果=======")
      console.log(body)
      if(body.code != 200){
         ctx.body = {code:404}
      }else{
         ctx.session.user = body.team
         ctx.body = {code:200}
      }
   } catch (e) {
      console.log("========获取team信息失败========")
      console.log(e)
      ctx.body = {code:500}
   }

})



router.get("/logout",async (ctx,next)=>{
  ctx.session.user = ""
  return ctx.redirect("/login")
})






//------全局model---------
module.exports = router



