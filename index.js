console.log('** Administration Hotel **');
var lemenu = require('./presentation.js');
var comm=require('./service.js');
lemenu.start();
lemenu.menu();
comm.reponse();
comm.err();