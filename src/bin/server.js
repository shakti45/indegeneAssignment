const dotenv  = require('dotenv').config()
const http = require('http')
const app = require('../config/express/app')
const logger = require('../middleware/logger/logger')
const {port} = require('../vars')

const server = http.createServer(app)


server.listen(port,
    ()=>{
        console.log(`Server started running on port ${port}`)
        logger.log('info',`Server started running on port ${port}`)
    })