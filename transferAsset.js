
let url = "http://localhost:4096/peer/transactions"
let aschJS = require('asch-js')

const axios = require('axios')
const secret = "sentence weasel match weather apple onion release keen lens deal fruit matrix"

// frost problem almost barrel shield switch leaf thought pitch glove display august
let recipient = "AGcqEW2B2WR45eDDndMq4a72k1wMSW4wsz"
let message = undefined

let trs = aschJS.uia.createTransfer('ASDF.TOK', 200000, recipient, message, secret)

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


