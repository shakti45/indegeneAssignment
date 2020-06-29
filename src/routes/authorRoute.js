const express = require('express')
const authorRoute = express.Router()
const authorController = require('../controller')

authorRoute.get('/getAuthorByAwards/:n',authorController.byAwards)
authorRoute.get('/getAuthorAwardsByYear/:year',authorController.byYear)
authorRoute.get('/getAuthorByBooksSold',authorController.byBooksSoldAndProfit)
authorRoute.get('/getAuthorByBirthDateAndTotalPrice/:birthdate:price',authorController.byBirthDateAndPrice)

module.exports =  authorRoute