var restify = require('restify');

var server = restify.createServer();

// MongoDB

server.get('/hello/:name', (req, res, next) => {
    res.send({ message: 'hello ' + req.params.name });
    next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});