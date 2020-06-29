require('dotenv').config({path:'../indegeneAssignment/src/.env'})
const http = require('http')
const app = require('../middleware/express/app')
const logger = require('../middleware/logger/logger')
const {port} = require('../vars')

const server = http.createServer(app)


server.listen(port,
    ()=>{
        console.log(`Server started running on port ${port}`)
        logger.log('info',`Server started running on port ${port}`)
    })