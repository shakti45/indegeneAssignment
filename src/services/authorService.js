const fetchRecords = require('../database/authorDao')
const {t1,t2,t3,t4} = require('../database/taskQuery')

let task1 = async (n) => {
    let res = await fetchRecords(t1(n)) 
    return res
}
let task2 = async (year) => {
    return fetchRecords(t2(year))
}
let task3 = async () => {
    return fetchRecords(t3())
}
let task4 = async (birthdate, price) => {
    return fetchRecords(t4(birthdate, price))
}
module.exports = {
    getAuthorByAwardService : task1,
    getAuthorAwardByYearService : task2,
    getTotalProfitService : task3,
    getPriceByAuthorService : task4
}