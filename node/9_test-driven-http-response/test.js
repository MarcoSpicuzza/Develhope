const {createServer} = require('node:http')

function createApp() {
  return createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/Html')
    //const jsonResponseBody = JSON.stringify({location: "Mars"})
    res.end("<h1>Welcome to the World Wide Web!</h1>")
  })
}
module.exports = createApp
