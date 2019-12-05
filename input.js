let connection; 

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  } 
  if (key === 'w') {
    //console.log("Up");
    connection.write('Move: up')
    connection.write('Say: go on')
  } else if ( key === 'a') {
    //console.log("left")
    connection.write('Move: left')
    connection.write('Move: yoohoo')
  } else if (key === 's') {
    //console.log("down")
    connection.write('Move: down')
    connection.write('Say: wow')
  } else if (key === 'd') {
    //console.log("right")
    connection.write('Move: right')
    connection.write('Say: yay')
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

