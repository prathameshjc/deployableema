var restify=require('restify')
var server=restify.createServer()

server.get('/hello/:name',respond)

server.get('/', function(req, res, next) {
    res.send('home')
    return next();
  });
//respond function
function respond(req,res,next){
    res.send('hello '+req.params.name)
}
server.listen(8080,function(){
    console.log('server running...')
})