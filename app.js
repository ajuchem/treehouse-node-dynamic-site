// Problem: Need simple way to look at user's badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile lookups and server our template via HTTP

// 1. Create a web server

var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function() {
    res.write( new Date() + "\n");
  }, 1000);
  //res.end('Hello world\n');
}).listen(3000);
console.log('Server running at port 3000');

// 2. Handle HTTP route GET / and POST / i.e. Home
  // if url == "/" && GET
    // show search
  // if URL == "/" && POST
    // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /chalkers
  // if url == "/..."
    // get json from Treehouse
      // on "end"
        // show profile
      // on "error"
          // show error

// 4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string
