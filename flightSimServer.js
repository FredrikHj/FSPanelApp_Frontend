// ========================================== Kortserver ==========================================
// Nödvändiga modulerna servermoduler
let express = require('express');
let app = express(express.json());
var cors = require('cors');
app.use(cors());
let port = 3001;
const server = app.listen(port, () =>  console.log(`Server körs på port --> ${port}!`));

let startOfMainPart = {
  nodeServer: true,
  fsuipc: true,
  board1: true,
}

//Useing Socket.io as a the webbhooks for auto updating the Frontend
const socket = require('socket.io');
const io = socket(server);
io.on('connection', (socket) => {
      io.emit('fsAPIData', startOfMainPart);
      /* socket.on('newMessegnes', (data) => {
          let roomIndex = parseInt(roomNrStr)-1;
        
          let chatMessObj = {
              id: JSON.stringify(messId(roomIndex)),
              timeStamp: fixDateTime(),
              usr: data.outUsr,
              chatMess: data.outChatMess
          }
          s
          // Push the new mes into its place
          chatRooms.chatRoomSetting[roomIndex].messegnes.push(chatMessObj);
          
          chatRooms.chatRoomSetting[roomIndex].userTyped.push(userTypedObj);
  
          // Save the movies in an json file
          fileSystem.writeFile('./server/ChatRooms.json', JSON.stringify(chatRooms //debugging
            , null, 2
              ), function(err) {});       
      }); */
});
  
// Configfil

//Integrerar kortfiler

// FlightSim RestAPi


// Testar med API till hemsidan

/* app.get('/fsData', (req, res) => {
    res.send(startOfMainPart);
}); */

// let http = require('http');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(2019);
/* 
// Läser in Arduino moduler occh kopplar upp mig mot mina kort
let jFive =  require("johnny-five");
let fs = require('fs');
let board = new jFive.Board({ port: 'COM10'});

board.on("ready", function () {

  // // Exampel - Tänder ledden vid switch on och släcker vid switch off
  // // Skapar instanser av mina komponenter
  // let spdt = new jFive.Switch(15);
  // let led = new jFive.Led(14);
  //
  // spdt.on('open', function () {
  //   led.on();
  //   console.log('On');
  // });
  //
  // spdt.on('close', function () {
  //   led.off();
  //   console.log('off');
  // });
  // ================================================================

  // // Exampel - RotaryEncoder
  // let rotaryEncoder = require('./rotaryEncorders');
  //
  // let upButton = new jFive.Button(10); // CLK
  // let downButton = new jFive.Button(11); // DT
  // let pressButton = new jFive.Button(12); // SW
  //
  // rotaryEncoder({
  //   upButton,
  //   downButton,
  //   pressButton,
  //   onUp: () => {
  //     console.log('Vänster');
  //   },
  //   onDown: () => {
  //     console.log('Höger');
  //   },
  //   onPress: () => {
  //     console.log('Tryck');
  //   },
  // });
  // ================================================================
  // Exampel - RotaryEncoder & MAX7219 led display

  let rotaryEncoder = require('./rotaryEncorders');

  let upButton = new jFive.Button(32); // CLK - Vänster
  let downButton = new jFive.Button(30); // DT - Höger
  let pressButton = new jFive.Button(28); // SW - Btn
  let ledDisplay = new jFive.Led.Digits({
    pins: {
      data: 12, // DIN
      clock: 10, // CLK
      cs: 11 // CS
    }
  });

  let changeNr = 0;
  let rotaryEncoderTest;
  rotaryEncoder({
    upButton,
    downButton,
    pressButton,
    onUp: () => {
      changeNr += 1;
      ledDisplay.print(changeNr);
      console.log('Vänster');
    },
    onDown: () => {
      changeNr -= 1;
      ledDisplay.print(changeNr);
      console.log('Höger');
      console.log(ledDisplay.print(changeNr));
    },
    onPress: () => {
      console.log('Tryck');   
    },
  });

});
 */