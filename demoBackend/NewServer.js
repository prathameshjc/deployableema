var restify=require('restify')
const { logIn,userCreation, demotable } = require('./Function');
const corsMiddleware = require('restify-cors-middleware2');
const { data } = require('jquery');
var server=restify.createServer() //server created

server.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Credentials', true); // If needed
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      return next();
    }
  );
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)

//get data from login form

server.post('/note', userCreation);  
server.use(restify.plugins.bodyParser());
server.get('/login',logIn)
server.get('/employees',demotable)
server.listen(8080, function(){
    console.log("server started...")
})