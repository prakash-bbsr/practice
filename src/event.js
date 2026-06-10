//Import Event
const eventEmmiter = require("events");

//instance of emitter
const myEmitter = new eventEmmiter();
//Register an event listener(eventName)
myEmitter.on('eventName',()=>{
    console.log("Event is occured");
});
//Emit the event
myEmitter.emit('eventName');

//Emit an event with arguments

myEmitter.on('eventWithArgu',(arg1,arg2)=>{
    console.log('Event is occured with arguments',arg1,arg2);
})
//emit the event with arguments
myEmitter.emit('eventWithArgu','arg1','arg2');