// Load the http module to create an http server.
var http = require('http');

var punster = require('./src/punster.js');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  subject = request.url.split("/")[1];
  try {
    pun = punster.pun(subject);
    response.end(pun);
    console.log(pun);
  } catch(err) {
    response.end(err)
    console.log(err);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
