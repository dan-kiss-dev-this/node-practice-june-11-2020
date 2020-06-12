const fs = require('fs');
const EventEmitter = require('events')

const filesAsync = fs.readdir('./', (err, files) => {
  if (err) console.log(7, err)
  else console.log('result', files)
})
console.log(filesAsync)

// import the class, remember to use module.exports on the class
const Logger = require('./logger')
// we need instance of the class to call function on it as we use this context
const logger = new Logger();

logger.on('messageLogged', arg => console.log(arg))

logger.log('hey')
