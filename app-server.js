const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const axios = require('axios')

app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/superhumans', require('./routes/api/superhumans'))
app.use('/api/users', require('./routes/api/users'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
