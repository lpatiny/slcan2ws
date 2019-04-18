'use strict';
var slcan = require('./lib/slcan');
var frame = require('./lib/frame');
var app = require('express')();
var ws = require('express-ws')(app);


app.ws('/', (ws, req) => {
  console.log('websocket connection')

  var can = new slcan('/dev/cu.usbmodem3031',6,115200, function(frame){
    ws.send(JSON.stringify(frame))
  })

  can.open()

  ws.on('message', function(msg) {

    msg = JSON.parse(msg)

    var can_frame = new frame(msg.id);
    can_frame.data = msg.data
    can_frame.is_ext_id = msg.is_ext_id
    can_frame.is_remote = msg.is_remote
    can_frame.timestamp = msg.timestamp
    can_frame.dlc = msg.dlc

    can.send(can_frame)
  });


});

app.listen(3001, () => console.error('listening on http://localhost:3001/'));
