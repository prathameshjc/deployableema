var restify=require('restify')
var server=restify.createServer() //server created
server.listen(8080, function(){
    console.log("server started...")
})