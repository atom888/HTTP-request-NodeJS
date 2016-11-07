// Lighthouse Labs - W2D1 Exercise //


var userInput = process.argv[2];

var http = require('http');
var https = require('https');

var tempOption = {
  host: "",
  path: userInput
};

function getHTML (options, callback) {

  var protocol  = "";

  if (options.path.startsWith("https:")) {
    protocol = https;
  }
  if (options.path.startsWith("http:")) {
    protocol = http;
  }

  // console.log(protocol);

  protocol.get(options.path, (Response) => {

    Response.setEncoding('utf8');

    let rawData = "";

    Response.on('data', function(chunk) {
      rawData += chunk;
    });

    Response.on('end', () => {
      callback(rawData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(tempOption, printHTML);