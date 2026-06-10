const os = require('os');
console.log(os.type());      // OS name
console.log(os.platform());  // linux, win32, darwin
console.log(os.arch());      // x64, arm64, etc.
console.log(os.hostname());  // Computer name
console.log(os.freemem());   // Free memory in bytes
console.log(os.totalmem());