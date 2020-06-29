var n = 0, birthdate = 0, price = 0
let task1 = (n) => {
    let query = 
    [
        {
            '$unwind': '$books'
        },
        {
            '$unwind': '$books.awards'
        },
        {
            '$group' : {
                '_id' : '$name',
                'count' : {'$sum':1}
                }
        },
        {
            '$match' : {
                'count' : {
                    '$gte': n
                    }
                }
        }
]
return query
}
let task2 = (year) =>{
    let query = 
    [
        {
            '$unwind': '$books'
        },
        {
            '$unwind': '$books.awards'
        },
        {
            '$project' :{
                '_id' : 0,
                'name' : 1,
                'y' : {'$year':'$books.awards.year'}
                }
        },
        {
            '$match' : {
                'y' : {
                    '$gte': year
                    }
                }
        },
        {
            '$group' : {
                '_id' : '$name'
                }
        }
        
    ]
    return query
}
let task3 = ()=>{
    let query = 
    [
        {
            '$unwind': '$books'
        },
        {
            '$match' : {
                'books.sold' : true
                }
        },
        {
            '$project':{
                '_id' : 0,
                'name' : 1,
                'totalBooksSold': '$books.copies',
                'profit' : {
                    '$multiply':[
                        '$books.price','$books.copies'
                        ]
                    }
                }
        },
        {
            '$group' : {
                '_id' : '$name',
                'profit' : {'$sum' : '$profit'},
                'totalBooksSold': {'$sum': '$totalBooksSold'}
                }
        }
        
    ]
    return query
}

let task4 = (birthdate, price) =>{
    let query = 
    [
        {
            '$unwind': '$books'
        },
        {
            '$group' : {
                '_id' : '$_id',
                'birth' : {'$first':'$birthdate'},
                'totalPrice' : {'$sum' : '$books.price'}
                }
        },
        {
            '$match' : {
                'birth' : {
                    '$gt' : new Date(birthdate)
                    //ISODate("1993-09-05 01:20:00.000Z")
                },
                'totalPrice' : {
                    '$gte' : price
                }
            }
        }  
    ]
    return query
}
module.exports = {
    t1 : task1,
    t2 : task2,
    t3 : task3,
    t4 : task4
}