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
//Integrerar kortfiler
boardVs1_2.on("ready", function () {
  // Left section 1 | Pin =  0 & 1 = Reserv!

//38 Flera triggering, fixa genom kod

  let vs1_13 = new jFive.Switch(43);
  vs1_13.on('open', function () {
    console.log('vs1_13 on');
    
    // Status setting
    
    // FlightSim setting
  });
  vs1_13.on('close', function () {
    console.log('vs1_13 off');
    
    // Status setting
    
    // FlightSim setting
  });
  /*
  let dp2 = new jFive.Switch(2);
  let dp3 = new jFive.Switch(3);

  // Left section 2:1
  
  
  /* Component place:
  1 ====================================================
  let vs1_1 = new jFive.Switch(4); // Function = OK
  vs1_1.on('open', function () {
    console.log('vs1_1 on');
    
    // Status setting
    
    // FlightSim setting
  });
  vs1_1.on('close', function () {
    console.log('vs1_1 off');
    
    // Status setting
    // FlightSim setting
  });
  // 2 ====================================================
  let vs1_2 = new jFive.Switch(21); // Function = OK
  vs1_2.on('open', function () {
    console.log('vs1_2 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_2.on('close', function () {
    console.log('vs1_2 off');
    
    // Status setting
    // FlightSim setting
  });
  // 3 ====================================================
  let vs1_3 = new jFive.Switch(6); // Function = OK
  vs1_3.on('open', function () {
    console.log('vs1_3 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_3.on('close', function () {
    console.log('vs1_3 off');
    
    // Status setting
    // FlightSim setting
  });
  // 4 ====================================================
  let vs1_4 = new jFive.Switch(7); // Function = OK
  vs1_4.on('open', function () {
    console.log('vs1_4 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_4.on('close', function () {
    console.log('vs1_4 off');
    
    // Status setting
    // FlightSim setting
  });
  // 5 ====================================================
  let vs1_5 = new jFive.Switch(8); // Function = OK
  vs1_5.on('open', function () {
    console.log('vs1_5 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_5.on('close', function () {
    console.log('vs1_5 off');
    
    // Status setting
    // FlightSim setting
  });
  // 6 ====================================================
  let vs1_6 = new jFive.Switch(9); // Function = OK
  vs1_6.on('open', function () {
    console.log('vs1_6 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_6.on('close', function () {
    console.log('vs1_6 off');
    
    // Status setting
    // FlightSim setting
  });
  // 7 ====================================================
  let vs1_7 = new jFive.Switch(10); // Function = Work widh to many triggering, fix it later by code
  vs1_7.on('open', function () {
    console.log('vs1_7 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_7.on('close', function () {
    console.log('vs1_7 off');
    
    // Status setting
    // FlightSim setting
  });
  // 8 ====================================================
  let vs1_8 = new jFive.Switch(11); // Function = OK
  vs1_8.on('open', function () {
    console.log('vs1_8 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_8.on('close', function () {
    console.log('vs1_8 off');
    
    // Status setting
    // FlightSim setting
  });
  // 9up ====================================================
  let vs1_9Up = new jFive.Switch(12); // Function = OK
  vs1_9Up.on('open', function () {
    console.log('vs1_9up');
    
    // Status setting
    // FlightSim setting
  });
  vs1_9Up.on('close', function () {
    console.log('vs1_9up off');
    
    // Status setting
    // FlightSim setting
  });
  // 9dn ====================================================
  let vs1_9Dn = new jFive.Switch(13); // Function = OK
  vs1_9Dn.on('open', function () {
    console.log('vs1_9dn');
    
    // Status setting
    // FlightSim setting
  });
  vs1_9Dn.on('close', function () {
    console.log('vs1_9dn');
    
    // Status setting
    // FlightSim setting
  });
  // 10 ====================================================
  let vs1_10 = new jFive.Switch(14); // Function = OK
  vs1_10.on('open', function () {
    console.log('vs1_10 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_10.on('close', function () {
    console.log('vs1_10 off');
    
    // Status setting
    // FlightSim setting
  });
  // 11 ====================================================
  let vs1_11 = new jFive.Switch(19); // Function = OK
  vs1_11.on('open', function () {
    console.log('vs1_11 on');
    
    // Status setting
    // FlightSim setting
  });
  vs1_11.on('close', function () {
    console.log('vs1_11 off');
    
    // Status setting
    // FlightSim setting
  });
  // 12 ====================================================
  let vs1_12 = new jFive.Switch(18); // Function = OK
  vs1_12.on('open', function () {
    console.log('vs1_12 on');
     
    // Status setting
    // FlightSim setting
  });
  vs1_12.on('close', function () {
    console.log('vs1_12 off');
     
    // Status setting
    // FlightSim setting
  }); */
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