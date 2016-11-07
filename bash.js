let cmdFiles = require('./commands.js');
var chalk = require('chalk');

process.stdout.write(chalk.blue('prompt > '));

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  let array = cmd.split(" ");

  if(cmdFiles[array[0]]) {
    let cmd = array.shift();
    var newArray = array.join(" ");

    cmdFiles[cmd](newArray);
  } else {
    process.stdout.write(chalk.red('Error:') + ' ' + cmd + ' is not defined');
    process.stdout.write(chalk.blue('\nprompt > '));
  }

});
