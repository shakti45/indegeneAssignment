let authorService = require('../services') 

let getAuthorByAwards = async (req,res,next) => {
    try{
        let result = await authorService.getAuthorByAwardService(parseInt(req.params.n))
        console.log(req.params.n)
        res.send({status:200, data: result})
    } catch (err) {
        next(err)
    }
}
let getAuthorByYear = async (req,res,next) => {
    try { 
        let result = await authorService.getAuthorAwardByYearService(parseInt(req.params.year))
        console.log(req.params.year)
        res.send({status:200, data: result})
    } catch (err) {
        next(err)
    }
}
let getAuthorByBooksSoldAndProfit = async (req,res,next) => {
    try {    
        let result = await authorService.getTotalProfitService()
        res.send({status:200, data : result})
    } catch (err) {
        next(err)
    }
}
let getAuthorByBithDateandPrice = async (req,res,next) => {
    try {
        let result = await authorService.getPriceByAuthorService(req.params.birthdate,parseInt(req.params.price))
        console.log(req.params.birthdate,req.params.price)
        res.send({status:200, data : result})
    } catch (err) {
        next(err)
    }
}
module.exports = {
    byAwards : getAuthorByAwards,
    byYear : getAuthorByYear,
    byBooksSoldAndProfit : getAuthorByBooksSoldAndProfit,
    byBirthDateAndPrice : getAuthorByBithDateandPrice        
}