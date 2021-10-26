const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

// display filename of this file using exported function
logger.log(__filename);

// path.parse()
console.log(path.parse(__filename));

// OS module functions
console.log(`Total Memory: ${os.totalmem()/1024/1024} MB`);
console.log(`Free Memory: ${os.freemem()/1024/1024} MB`);
