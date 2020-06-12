//imports the class
const EventEmitter = require('events');
//below we make an instance of the class
const emitter = new EventEmitter()

// register a listener
emitter.on('messageLogged', (arg) => { //arg aka e
  console.log('Listener called', arg)
})

//raise and event used to signal that an event has happened
emitter.emit('messageLogged', { id: 1, url: 'google.com' });

//raise login (data:message)