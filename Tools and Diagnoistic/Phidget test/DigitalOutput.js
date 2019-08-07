var phidget22 = require('phidget22');

var SERVER_PORT = 5661;

function main() {

	if (process.argv.length != 3) {
		console.log('usage: node DigitalOutput.js <server address>');
		process.exit(1);
	}
	var hostname = process.argv[2];

	console.log('connecting to:' + hostname);
	var conn = new phidget22.Connection(SERVER_PORT, hostname, { name: 'Server Connection', passwd: '' });
	conn.connect()
		.then(runExample)
		.catch(function (err) {
			console.error('Error running example:', err.message);
			process.exit(1);
		});
}

function runExample() {

	console.log('connected to server');
	var ch = new phidget22.DigitalOutput();

	var exTimer;

	function updateState() {
		var newState = !ch.getState();
		console.log('\nSetting state to ' + newState + ' for 5 seconds...');
		ch.setState(newState);
	}

	/* Uncomment the following lines to open a hub port */
	//	ch.setHubPort(<port number>);
	//	ch.setIsHubPortDevice(true);	/* open the VINT hub port */

	ch.onAttach = function (ch) {
		console.log(ch + ' attached');
		console.log('\nSetting state to true for 5 seconds...');
		ch.setState(true);
		exTimer = setInterval(function () { updateState() }, 5000);
	};

	ch.onDetach = function (ch) {
		console.log(ch + ' detached');
		clearInterval(exTimer);
	};

	ch.open().then(function (ch) {
		console.log('channel open');
	}).catch(function (err) {
		console.log('failed to open the channel:' + err);
	});
}

if (require.main === module)
	main();
