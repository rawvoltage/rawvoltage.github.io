const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = Promise;

const dbUrl = "mongodb://user:password@ds151207.mlab.com:51207/my1stdb";

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
    
})

app.post('/messages', (req, res) => {
    var message = new Message(req.body)
    
    message.save((err) => {
        if (err)
            sendStatus(500)
        
        io.emit('message', req.body)
        res.sendStatus(200)
    })
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dbUrl, {useMongoClient: true}, (err) => {
    console.log('mongo db connection', err)
})

const server = http.listen(process.env.PORT || 3000, () => {
    console.log('server is listening on port', server.address().port, app.settings.env)
})