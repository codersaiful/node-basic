let fs = require('fs');
let events = require('events');

let demo_file = './file/demo.txt';
let rs = fs.createReadStream(demo_file);

rs.on('open',()=>{
    console.log("the file is opend");
});

//Handling Events
let eventEmitter = new events.EventEmitter();

let myEventHandler = () => {
    console.log('I hear a scream!');
}


eventEmitter.on('screem', myEventHandler);

eventEmitter.emit('screem');