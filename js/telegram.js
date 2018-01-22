//const socket = io()
const express = require('express')
//const bodyParser = require('body-parser')

const app = express()

const http = require('http').Server(app)
//const io = require('socket.io')(http)

const port = process.env.PORT || 3000;
const url = "https://api.telegra.ph/getViews/";

//app.use(express.static(__dirname))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: false}))

app.get(url, (data) => {
    console.log(url)
})

//app.post(url, (e, r, b) => {
//    let json = JSON.parse(b);
//    console.log('test');
//})
//
//const server = http.listen(port, () => {
//    console.log('server is listening on port', server.address().port, app.settings.env)
//})