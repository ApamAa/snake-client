const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(data) {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541,
  
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}



//console.log('Connecting ...');
//connect();

module.exports = {connect};