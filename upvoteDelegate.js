
let url = "http://localhost:4096/peer/transactions"
let aschJS = require('asch-js')

const axios = require('axios')
const secret = "sentence weasel match weather apple onion release keen lens deal fruit matrix"

// vote for myself
let delegateList = [
  'a7cfd49d25ce247568d39b17fca221d9b2ff8402a9f6eb6346d2291a5c81374c'
]

let trs = aschJS.vote.createVote(delegateList, secret)

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


