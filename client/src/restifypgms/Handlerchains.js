var restify=require('restify')
var server=restify.createServer()

server.get('/', function(req, res, next) {
    res.send('home')
    return next();
  });
//   server.pre(restify.plugins.pre.dedupeSlashes());
  server.get('/foo',
    function(req, res, next) {
      req.someData = 'foo';
      return next();
    },
    function(req, res, next) {
      res.send(req.someData);
      return next();
    }
  );

  server.listen(8080,function(){
      console.log('server running...')
  })