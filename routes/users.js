const router = require('koa-router')()
const Redis = require('koa-redis')
const Person = require('../dbs/models/person')

const Store = new Redis().client
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/addPerson',async function(ctx){
   const person = new Person({
     name: ctx.request.body.name,
     age: ctx.request.body.age
   })
   let code 
   try {
    await person.save()
    code = 0
   } catch(e){
     code = -1
   }

   ctx.body = {
     code
   }
  
})

router.post('/getPerson',async function(ctx){
  const result =  await Person.findOne({name: ctx.request.body.name}) //只查找一个对象 不再继续
  const results = await Person.find({name: ctx.request.body.name})   //所有匹配到的都查找 以数组方式列出来

  ctx.body = {
    code:0,
    result,
    results
  }
})

router.post('/updatePerson', async function(ctx){
  const result = await Person.where({
    name: ctx.request.body.name
  }).update({
    age: ctx.request.body.age
  })
  ctx.body={
    code:0
  }
})

router.post('/removePerson', async function(ctx){//真实情况下 禁止对数据库进行删除操作 严令禁止
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body={
    code:0
  }
})


router.get('/fix',async function(ctx,next){
  const  st = await Store.hset('fix','name',Math.random())
  ctx.body={
    code:0
  }
})


module.exports = router
