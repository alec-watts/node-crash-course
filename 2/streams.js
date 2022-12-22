const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// console.log('Yolo');
// //event listener on a data event. On the event 
// //where we receive a chunk of data from the stream.
// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping event listener
readStream.pipe(writeStream);