var router = require("./router.js");
// Problem: Need simple way to look at user's badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile lookups and server our template via HTTP

// Create a web server

var http = require('http');
http.createServer(function(req, res) {
  router.home(req, res);
  router.user(req, res);
}).listen(3000);
console.log('Server running at port 3000');
