let connection; 

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  } 
  if (key === 'w') {
    //console.log("Up");
    connection.write('Move: up')
  } else if ( key === 'a') {
    //console.log("left")
    connection.write('Move: left')
  } else if (key === 's') {
    //console.log("down")
    connection.write('Move: down')
  } else if (key === 'd') {
    //console.log("right")
    connection.write('Move: right')
  }


}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput)

  stdin.resume();
  
  return stdin;
    
}


module.exports = { setupInput };

