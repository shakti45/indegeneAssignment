const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const rootRoute = require('../../routes')
const errorHandler = require('../../middleware/errorHandler')



app.use('/indegene',rootRoute)
app.use(errorHandler)


module.exports = app