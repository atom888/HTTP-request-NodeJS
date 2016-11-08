
module.exports = function getHTML (options, callback) {

  var http = require('http');
  var https = require('https');

  var tempOption = {


  };
  // option.path // combination of host and path : http:// host + - exampe
  // tempOption.host = options.host;
  // tempOption.path = options.path;

  https.get("https://" + options.host + options.path, (Response) => {

    Response.setEncoding('utf8');

    let rawData = "";

    Response.on('data', function(chunk) {
      rawData += chunk;
    });

    Response.on('end', () => {
      callback("html: " + rawData);
    });
  });
};




