const os = require('os')

console.log("User: " + os.userInfo().username)
console.log(`Up time is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }

  console.log("Current OS :" + currentOS.name + "-- Release" + currentOS.release)