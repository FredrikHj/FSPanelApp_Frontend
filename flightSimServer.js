// ========================================== Kortserver ==========================================
// Modules for Express Node JS server
let express = require('express');
let app = express();
app = express(express.json());

let cors = require('cors');
app.use(cors());
let fileSystem = require('fs');

// Modules for my B737 panel
let jFive =  require("johnny-five");
let fsuipc = require('fsuipc');
let phidget22 = require('phidget22');

const obj = new fsuipc.FSUIPC();  
/* 
//Pugview
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }
)); */




// Configfile and overall configuration
const configServer = require('./ServerFlightSim/configServer.json'); 
const port = configServer.port; // Set server port
const server = app.listen(port, () =>  console.log(`Server körs på port --> ${port}!`));

// Connect the Arduino boards 
let boardVs1_2 = new jFive.Board({ port: // Runt skrivaren usb = 'COM11',
// Bakom datorn
'COM4'});
// ============================ Connect the Arduino and phidget boards =========================================
let vs1_13Status = 0;
boardVs1_2.on("ready", function () {
  let lcd = new jFive.LCD({ 
   controller: "PCF8574AT",
    pins: [5 ,6],
    backlight: 3,
  /*   rows: 2,
    cols: 20, */
  });
/*   lcd.on();
  lcd.cursor(0,0); */
  lcd.print("scsadcs");


  // Connect the Phidget server
  let ledConn = new phidget22.Connection(3003, 'localhost');
  ledConn.connect().then(function () {
    console.log("Ansluten");
  }).catch(function (err) {
    console.error("Anslutningsfel", err);
  });  
  
  // Initilize LED Channels ====================================================================================
  let LEDBoard1ChannelObj = {};
  let LEDBoard2ChannelObj = {}; 
  let LEDBoardObj = {};
  let dimValue = 0.2;
  
  initilizeBoards(LEDBoard1ChannelObj, LEDBoard2ChannelObj, LEDBoardObj);

  // ===========================================================================================================
  //Integrerar kortfiler
  // Left section 1 & 2
  //require('./ServerFlightSim/Boards/D1Board.json'); 
  let vs1_13 = new jFive.Switch(12);
  vs1_13.on('open', function () {
    LEDBoardObj.board1.chInstance1.setDutyCycle(0.0);  
    console.log('vs1_13 on');
    vs1_13Status = "1";
    //LED on
    LEDBoardObj.board1.chInstance0.open().then(function () {
      // code to execute after open succeeds
      console.log('Utgång 0 - Öppen');
      LEDBoardObj.board1.chInstance0.setDutyCycle(dimValue);  
    }).catch(function (err) {
      // code to execute if open fails
      console.log('Utgång 0 - Ej öppen');  
    });
    // Status setting
    console.log(vs1_13Status);
    //sendToFrontend(vs1_13Status);
    // FlightSim setting
  });
  
  vs1_13.on('close', function () {

    LEDBoardObj.board1.chInstance0.setDutyCycle(0.0); 
    console.log('vs1_13 off');
    vs1_13Status = "0";
    //LED on
    LEDBoardObj.board1.chInstance1.open().then(function () {
      // code to execute after open succeeds
      console.log('Utgång 0 - Öppen');
      LEDBoardObj.board1.chInstance1.setDutyCycle(dimValue);  
    }).catch(function (err) {
      // code to execute if open fails
      console.log('Utgång 0 - Ej öppen');  
    });
    // Status setting
    console.log(vs1_13Status);
    //sendToFrontend(vs1_13Status);
    // FlightSim setting
  });

  /* Name for commands - Is sent once the app is starting
      See the file "FSX Panel - Elektronikkort Komponenter --> Komponenter och dess kommandon" 
      for names for the correspondings commands! */
  let dbFlightCommandsName = require('./ServerFlightSim/CommandsName.json'); 
   app.get('/fsCommandsName', (req, res) => {
    res.status(200).send(dbFlightCommandsName);
  });
  // Name of my FScommand
  console.log(dbFlightCommandsName);
  
  // FS Data -  Is sent at least every secund for the app
  app.get('/FSData', (req, res) => {
    res.status(200).send({
      "test": vs1_13Status,
      "rotaryStatus": "1"
    });
  });

});
// ====================================== initilize the Boards ======================================
function initilizeBoards(LEDBoard1ChannelObj, LEDBoard2ChannelObj, LEDBoardObj){
  for (let outputs = 0; outputs <= 63; outputs++) {
    // Creates LED board1 channel with serieNr and its channel 
    LEDBoard1ChannelObj['chInstance' + outputs] = new phidget22.DigitalOutput();
    LEDBoard1ChannelObj['chInstance' + outputs].setDeviceSerialNumber(524938);
    LEDBoard1ChannelObj['chInstance' + outputs].setChannel(outputs);
    
    LEDBoard2ChannelObj['chInstance' + outputs] = new phidget22.DigitalOutput();
    LEDBoard2ChannelObj['chInstance' + outputs].setDeviceSerialNumber(00000);
    LEDBoard2ChannelObj['chInstance' + outputs].setChannel(outputs);
  }
  // Save the channels into a objects key corresponding a key named board + nr for the board
  LEDBoardObj['board1'] = LEDBoard1ChannelObj;
  LEDBoardObj['board2'] = LEDBoard2ChannelObj;
}

/*   led.setLEDForwardVoltage(5);
led.setLEDCurrentLimit(0.04); */




 
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
 */

/*    let test = {
  nodeServer: true,
  fsuipc: true,
  board1: true, 
  testC1: vs2_1Component1,
  testC2: vs2_1Component2,
} 
 
 


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