const os = require("os");

// arch()
console.log(os.arch());

// platform()
if (os.platform() === "win32") {
  console.log("You are using Windows");
}

console.log(os.platform());


// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB left`);

// totalmem()
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 /1024 } GB`);

// homedir()
console.log(os.homedir());

// type()
console.log(os.type());

// uptime()
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 /60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);


// release()
console.log(os.release());

// hostname()
console.log(os.hostname());

// networkInterfaces()

// const networkInterfaces = os.networkInterfaces();

// for (const [interfaceName, interfaceAddresses] of Object.entries(networkInterfaces)) {
//   console.log(`Interface: ${interfaceName}`);
//   for (const address of interfaceAddresses) {
//     if (address.family === 'IPv4' && !address.internal) {
//       console.log(`  IP: ${address.address}`);
//     }
//   }
// }

// userInfo()
console.log(os.userInfo());







