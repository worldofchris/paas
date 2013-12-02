// Load the http module to create an http server.
var http = require('http');

var punster = require('./src/punster.js');
var view = require('./src/view.js');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  
  var subject = request.url.split("/")[1];
  var format;
  var view_foo;

  if (request.url.split("/").slice(-1)[0] == 'json') {
    format = 'json';
  }

  try {
    pun = punster.pun(subject);
    view_foo = (view.pun(pun, subject, format));
    console.log(pun);
  } catch(err) {
    switch (err) {
      case 'do not has':
        view_foo = (view.signup(subject, format));
        break;
      case 'dirty boy':
        view_foo = (view.dirty_boy(subject, format));
        break;
      }
    console.log(err);
  }

  if (format == 'json') {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(view_foo));
  } else {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(view_foo);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
