const express = require('express')
const s3Controller = require('./src/s3-controller')
const app = express()

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/upload-to-s3', s3Controller.s3Upload)

/*const port = process.env.PORT || '3000';
const host = '0.0.0.0';

app.listen(port, host, function() {
    console.log(`Server is up at ${port}`)
})
*/
var http = require('http')
var server =http.Server(app)


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

server.listen(port, host, function() {
    console.log("Server started.......");
  });