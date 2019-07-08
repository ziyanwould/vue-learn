const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', { //这里有await 外层函数就必须有 async才行 反之外层函数有 async 内层函数不必有await
                              //await 后面其实跟着着是一个 Promise 对象，来着
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookies:ctx.cookies.get('pvid')
  }
})

router.get('/testAsync',async(ctx) => {
  global.console.log('start',new Date().getTime())
  const a = await new Promise((resolve,reject) => {
     setTimeout(()=>{
        global.console.log('async a',new Date().getTime())
        resolve('ab')
     },1000)
  })
  const b = await 12; //会转化成Promise对象
  //实际等于
  //const b = await  Promise.resolve(11)
  const c = await new Promise((resolve,reject) => {
    setTimeout(()=>{
       global.console.log('async c',new Date().getTime())
       resolve('acb')
    },2000)
 })
  ctx.body={
    a,
    b,
    c
  }
})

module.exports = router
