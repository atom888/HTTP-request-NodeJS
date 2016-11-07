// Lighthouse Labs - W2D1 Exercise //


var userInput = process.argv[2];

var http = require('http');
var https = require('https');


function getAndPrintHTML () {

var options = {
  host: "",
  path: ""
};
// Setting user input into the object options path value
options.path = userInput;

console.log(options);

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
      console.log(rawData);
    });
  });
}

getAndPrintHTML();