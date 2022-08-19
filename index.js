const express = require('express')
const s3Controller = require('./src/s3-controller')
const app = express()

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/upload-to-s3', s3Controller.s3Upload)

const port = process.env.port || '3000';

app.listen(port, () => {
    console.log(`Server is up at ${port}`)
})