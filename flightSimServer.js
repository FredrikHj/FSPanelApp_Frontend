// ========================================== Kortserver ==========================================
// Usefull modules for server and set to action
let express = require('express');
var cors = require('cors');
let fileSystem = require('fs');

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
let boardVs1_2 = new jFive.Board({ port: 'COM3'});

/* // Initizial run
app.get('/FSData', (req, res) => {
  res.status(200).send(dbFlightSimTest);
}); */

//Integrerar kortfiler
boardVs1_2.on("ready", function () {
  
  // Left section 2:1
  let dp2 = new jFive.Switch(2);
  let dp3 = new jFive.Switch(3);
  let dp4 = new jFive.Switch(4);
  let dp5 = new jFive.Switch(5);
  let dp6 = new jFive.Switch(6);
  let dp7 = new jFive.Switch(7);
  let dp8 = new jFive.Switch(8);
  let dp9_1 = new jFive.Switch(9);
  let dp9_2 = new jFive.Switch(10);
  let dp10 = new jFive.Switch(11);
  let dp11 = new jFive.Switch(12);
  let dp12 = new jFive.Switch(13);
  let dataObj = {};
  /* Component place:
  1 */


  dp4.on('open', function () {
    console.log(boardVs1_2);
 
    /*   let vs2_1Component1 = '1';
    //console.log('1 up');
    dbFlightSimTest['component1'] = vs2_1Component1;
     
      // Save the components status if debugging
      fileSystem.writeFile('./ServerFlightSim/dbFlightSimTest.json', JSON.stringify(dbFlightSimTest //debugging
          , null, 2
        ), function(err) {});  
        //console.log(dbFlightSimTest);
 */    });
  
    dp4.on('close', function () {
      console.log(boardVs1_2.Switch);
      
    /*   let vs2_1Component1 = '0';
      dbFlightSimTest['component1'] = vs2_1Component1;
     console.log('1 dn');
      console.log('==================================================');
     // Save the components status if debugging
      fileSystem.writeFile('./ServerFlightSim/dbFlightSimTest.json', JSON.stringify(dbFlightSimTest //debugging
        , null, 2
      ), function(err) {});   

      //console.log(dbFlightSimTest); */
    });
    // 2
   dp5.on('open', function () {
    console.log(boardVs1_2.Switch);
   /*  let vs2_1Component2 = '1';
      dbFlightSimTest['component2'] = vs2_1Component2;
    // console.log('2 up');


      // Save the components status if debugging
      fileSystem.writeFile('./ServerFlightSim/dbFlightSimTest.json', JSON.stringify(dbFlightSimTest //debugging
          , null, 2
        ), function(err) {});  
         console.log(dbFlightSimTest);
        console.log(dp2.pin); */
     });
    dp5.on('close', function () {
      console.log(boardVs1_2.Switch);
      
    /*let vs2_1Component2 = '0';
      dbFlightSimTest['component2'] = vs2_1Component2;
      console.log('2 dn');
      console.log('==================================================');
 
      // Save the components status if debugging
      fileSystem.writeFile('./ServerFlightSim/dbFlightSimTest.json', JSON.stringify(dbFlightSimTest //debugging
        , null, 2
      ), function(err) {});    
       console.log(dbFlightSimTest);
      console.log(dp2); */
     }); 
  });
  
  /* let test = {
    nodeServer: true,
    fsuipc: true,
    board1: true, 
    testC1: vs2_1Component1,
    testC2: vs2_1Component2,
  }  */
  
  
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
  });
 


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