let fs = require('fs');
var chalk = require('chalk');


let prompt = function () {
  process.stdout.write(chalk.blue('\nprompt > '));
}

module.exports = {
  date: function () {
    process.stdout.write(Date());
    prompt();
  },

  pwd: function() {
    return process.stdout.write(process.cwd());
    prompt();
  },

  ls: function () {
    fs.readdir('.', function(err, files) {
      if (err){
        throw err;
      }
      else {
        files.forEach(function(file) {
          process.stdout.write(file + "\n");
        })
      }
      process.stdout.write(chalk.blue('prompt > '));
    });
  },

  echo: function (array) {
    process.stdout.write(array);
    prompt();
  },

  cat: function (param) {
    fs.readFile(param, function(err, files) {
      if(err) {
        throw err;
      } else {
        process.stdout.write(files + "\n");
        process.stdout.write(chalk.blue('prompt > '));
      }

    });
  },

  head: function (param) {
    fs.readFile(param, function(err, files) {
      if(err) {
        throw err;
      } else {
        // console.log());
        process.stdout.write(files.toString()
          .split("\n")
          .slice(0, 5)
          .join("\n") + '\n');
        process.stdout.write(chalk.blue('prompt > '));
      }
    });
  }
}
