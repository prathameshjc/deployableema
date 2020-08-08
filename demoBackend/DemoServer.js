
var restify=require('restify')
const corsMiddleware = require('restify-cors-middleware')



// const cors = corsMiddleware({
//   preflightMaxAge: 5, //Optional
//   origins: ['*'],
//   allowHeaders: ["Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"],
//   exposeHeaders: ['Access-Control-*']
// })
var server=restify.createServer()
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)



server.post('/new',function mynew(req,res){
    // console.log(user);
})

server.listen(8000,function(){
    console.log('demo server is started...')
})