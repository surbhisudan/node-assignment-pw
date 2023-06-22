const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// Define the event handler
const eventHandler = () => {
  console.log('Event handler called');
};

// Add the event handler
customEmitter.on('myEvent', eventHandler);

// Trigger the event
customEmitter.emit('myEvent'); // Event handler called

// Remove the event handler
customEmitter.off('myEvent', eventHandler);

// Trigger the event again after removing the handler
customEmitter.emit('myEvent'); // No output, as the handler has been removed
