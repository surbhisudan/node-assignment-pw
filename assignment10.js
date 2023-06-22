const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

// Subscribe to the "subscribe" event
customEmitter.on('subscribe', (subscriber) => {
  console.log(`Thanks for Subscribing to ${subscriber}`);
});

// Trigger the "subscribe" event
customEmitter.emit('subscribe', 'College Wallah');


console.log('Default maximum number of event listeners:', EventEmitter.defaultMaxListeners);

// Set the new maximum number of event listeners
EventEmitter.defaultMaxListeners = 5;

console.log('Updated maximum number of event listeners:', EventEmitter.defaultMaxListeners);
