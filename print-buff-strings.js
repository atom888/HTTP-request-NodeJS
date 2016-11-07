// Lighthouse Labs - W2D1 Exercise //

function getAndPrintHTML () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (httpsResponse) => {

    httpsResponse.setEncoding('utf8');

    let rawData = '';

    httpsResponse.on('data', function(chunk) {
      rawData += chunk;
    });

    httpsResponse.on('end', () => {
      console.log(rawData);
    });

  });

}


getAndPrintHTML();