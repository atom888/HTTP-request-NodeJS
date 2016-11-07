// Lighthouse Labs - W2D1 - Scripting HTTP Requests with NodeJS


function getAndPrintHTMLChunks () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1/html'

};

  var callback = function (httpsResponse) {

    httpsResponse.on('data', function(chunk) {

      console.log("Chunk Received. " + chunk + "\n");

    });

  }
console.log("Requesting.");

https.get(requestOptions, callback);

}


getAndPrintHTMLChunks();