// ========================================== Kortserver ==========================================
// Usefull modules for server and set to action
let express = require('express');
var cors = require('cors');
let fileSystem = require('fs');

const fsuipc = require('fsuipc');
const obj = new fsuipc.FSUIPC();  

let app = express(express.json());
app.use(cors());

// Configfile and overall configuration
let configServer = require('./ServerFlightSim/configServer.json'); 

let port = configServer.port;
const server = app.listen(port, () =>  console.log(`Server körs på port --> ${port}!`));

// Läser in Arduino moduler occh kopplar upp mig mot mina kort
let jFive =  require("johnny-five");
let dbFlightSimTest = require('./ServerFlightSim/dbFlightSimTest.json'); 

// Setup the boards and its com port 
let boardVs1_2 = new jFive.Board({ port: // Runt skrivaren usb = 'COM11',
  // Bakom datorn
'COM12'});

// Initizial run
/* app.get('/FSData', (req, res) => {
  res.status(200).send(dbFlightSimTest);
});
 */
boardVs1_2.on("ready", function () {
  //Integrerar kortfiler
    // Left section 1 & 2
      //require('./ServerFlightSim/Boards/D1Board.json'); 


  let ledSegment = new jFive.Led.Digits({
    pins: {
      data: 36, // DIN
      cs: 38, // CS
      clock: 40 // CLK
    }
  });
  ledSegment.print();
});

//38 Flera triggering, fixa genom kod
/* 
let vs1_13 = new jFive.Switch(2);
vs1_13.on('open', function () {
  console.log('vs1_13 on');
  
  // Status setting
  
  // FlightSim setting
});
vs1_13.on('close', function () {
  console.log('vs1_13 off');
  
  // Status setting
  
  // FlightSim setting
}); */
/*

  

}); 
  
/*    let test = {
    nodeServer: true,
    fsuipc: true,
    board1: true, 
    testC1: vs2_1Component1,
    testC2: vs2_1Component2,
  } 
  //Useing Socket.io as a the webbhooks for auto updating the Frontend
  const socket = require('socket.io');
  const io = socket(server);
  io.on('connection', (socket) => {
      socket.emit('fsAPIData', dbFlightSimTest);
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
  //});
 


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




  // // Exampel - Tänder ledden vid switch on och släcker vid switch off
  // Skapar instanser av mina komponenter
  // let dp = new jFive.Switch(15);
  // let led = new jFive.Led(14);
  //
  // dp.on('open', function () {
  //   led.on();
  //   console.log('On');
  // });
  //
  // dp.on('close', function () {
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

/*  let rotaryEncoder = require('./rotaryEncorders');

  let upButton = new jFive.Button(32); // CLK - Vänster
  let downButton = new jFive.Button(30); // DT - Höger
  let pressButton = new jFive.Button(28); // SW - Btn
  let ledDisplay = new jFive.Led.Digits({
    pins: {
      data: 12, // DIN
      cs: 11 // CS
      clock: 10, // CLK
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