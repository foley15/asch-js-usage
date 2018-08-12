
let url = "http://localhost:4096/peer/transactions"
let aschJS = require('asch-js')

const axios = require('axios')
const secret = "sentence weasel match weather apple onion release keen lens deal fruit matrix"

let options = {
  name: 'test',
  description: 'afe',
  link: 'http://github.com/a.zip',
  icon: 'http://github.com/icon.png',
  delegates: [
    "db18d5799944030f76b6ce0879b1ca4b0c2c1cee51f53ce9b43f78259950c2fd",
    "590e28d2964b0aa4d7c7b98faee4676d467606c6761f7f41f99c52bb4813b5e4",
    "bfe511158d674c3a1e21111223a49770bee93611d998e88a5d2ea3145de2b68b",
    "7bbf62931cf3c596591a580212631aff51d6bc0577c54769953caadb23f6ab00",
    "452df9213aedb3b9fed6db3e2ea9f49d3db226e2dac01828bc3dcd73b7a953b4"
  ],
  unlockDelegates: 3
}
let trs = aschJS.dapp.createDApp(options, secret)

let data = {
  transaction: trs
}

let headers = {
  headers: {
    magic: "594fe0f3",
    version: ''
  }
}

axios.post(url, data, headers)
  .then((response) => {
    console.log(`${JSON.stringify(response.data, null, 2)}`)
  })
  .catch(erro => {
    console.log(JSON.stringify(erro.message))
  })


