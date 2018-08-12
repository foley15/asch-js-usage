
let url = "http://localhost:4096/peer/transactions"
let aschJS = require('asch-js')

const axios = require('axios')
const secret = "sentence weasel match weather apple onion release keen lens deal fruit matrix"

let trs = aschJS.uia.createIssue('ASDF.TOK', "200000", secret)

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


