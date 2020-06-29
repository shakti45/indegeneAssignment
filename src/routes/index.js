const express = require('express')
const rootRoute = express()
const author = require('./authorRoute')

rootRoute.use('/author',author)

module.exports = rootRoute