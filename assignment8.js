const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

customEmitter.on('subscribe', (subscriber) => {
  console.log(`Thanks for Subscribing to ${subscriber}`);
});

customEmitter.emit('subscribe',"College Wallah");
