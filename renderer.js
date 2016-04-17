var fs = require('fs');

function view(templateName, values, res) {
  // read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');
  // insert values into the content

  // write out the contents to the response 
  res.write(fileContents);
  }

module.exports.view = view;
