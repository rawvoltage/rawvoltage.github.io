//const socket = io()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('https://api.telegra.ph/getViews/My-Cry-for-Help-01-03', (data) => {
    console.log('test')
})

app.get('https://api.telegra.ph/getViews/My-Cry-for-Help-01-03', (req, res) => {
    console.log('test')
})