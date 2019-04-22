'use strict';
const slcan = require('./lib/slcan');
const frame = require('./lib/frame');
const app = require('express')();
const ws = require('express-ws')(app);


let can = new slcan(process.env.SERIAL,process.env.CANSPEED,process.env.BAUD)
let alreadyConnected = false

app.ws('/', (ws, req) => {

  if(!alreadyConnected){
    console.log('websocket connection')
    alreadyConnected = true

    can.recvFrameCallback = function(frame){
      
      if(process.env.DEBUG){
        console.log(frame)
      }

      ws.send(JSON.stringify(frame))
    }

    can.open()  
  }else{
    console.log("single user connection allowed only")
  }

  ws.on('close', function(msg) {
    can.close()
    alreadyConnected = false
  })
  

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
