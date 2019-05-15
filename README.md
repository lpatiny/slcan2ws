# slcan2ws

Forwards CAN frames from an SLCAN adapter to Websockets listeners and back.

## Quickstart
1. `npm install`
2. set your serial port, baudrate and CAN speed in `package.json`
2. `npm start`
3. point your websocket client to: `ws://localhost:3001`

## Sending
You can send messages to the SLCAN adapter (and thus the CAN bus) by putting this string on the socket:

    {
      "id":402740591,
      "dlc":8,
      "timestamp":1555618500027,
      "data":[0,27,0,0,0,0,0,223],
      "is_ext_id":false,
      "is_remote":false,
      "id_ext_id":true,
    }

## Receiving
All messages received by your SLCAN adapter will go to your websocket client.

    {
      "id":402740591,
      "dlc":8,
      "timestamp":1555618500027,
      "data":[0,27,0,0,0,0,0,223],
      "is_ext_id":false,
      "is_remote":false,
      "id_ext_id":true,
      "bus":null
    }

## Developements tools

You can install the python tool to check the expected result: https://uavcan.org/GUI_Tool/Overview/

The instructions that can be received and send can be found in the file:
https://github.com/cvra/CAN-USB-dongle-fw/blob/master/src/slcan.c#L226


## Credit

This lib uses https://github.com/danyocom/nodeLAWICEL slcan and frame modules.
