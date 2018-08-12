
let url = "http://localhost:4096/peer/transactions"
let aschJS = require('asch-js')

const axios = require('axios')
const secret = "stone elephant caught wrong spend traffic success fetch inside blush virtual element"

let recipientId = "AHMCKebuL2nRYDgszf9J2KjVZzAw95WUyB"
let amount = 2000 * 1e8
let message = undefined

let trs = aschJS.transaction.createTransaction(recipientId, amount, message, secret)

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


