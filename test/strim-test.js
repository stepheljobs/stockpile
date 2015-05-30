/*
 * Copyright (c) 2014. LetsBlumIt Corp.
 */

'use strict';

// Create a connection to http://localhost:9999/echo
//var sock = new SockJS('http://localhost:9999/echo');
var strim = new StrimJS('http://localhost:9999/echo');

//strim.on('test', function () {
//  console.log('test');
//});
//
//strim.on('tezt', function () {
//  console.log('tezt');
//});

strim.on('open', function () {
  console.log('---> open client side');
});

strim.on('close', function () {
  console.log('---> close client side');
});

strim.on('message', function (message) {
  console.log('message: ', message);
});

// Function for sending the message to server
function sendMessage() {
  // Get the content from the textbox
  var message = 'this is a message', username = 'stepheljobs', send;

  // object to send
  send = {
    message: message,
    username: username
  };

  // Send it now
  strim.send(JSON.stringify(send));
}

//setTimeout(function () { sendMessage(); }, 1000);

//describe('StrimJS v0.1.0', function () {
//  it('must not be null', function () {
//    assert.deepEqual(strim, {});
//  });
//});

