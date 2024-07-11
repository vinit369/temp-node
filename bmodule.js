const os = require('os')

//const user = os.cpus()
//console.log(user)

//method for extractiing info in proper way

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS)