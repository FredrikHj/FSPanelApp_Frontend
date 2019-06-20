  // Läser in Arduino moduler occh kopplar upp mig mot mina kort
let jF = require("johnny-five");
let testToIndex = 'fsa';

    board = new jF.Board({
      port: 'COM8',
    });

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new jF.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();

});
