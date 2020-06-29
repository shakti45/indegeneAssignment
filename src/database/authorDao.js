const {dbURL,database} = require('../config/vars')
const logger = require('../config/logger/logger')


const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

let fetchRecords = async(q)=> {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("Indegene");

        let collection = db.collection('Authors');

        let query = q
        console.log(query)

        let res = await collection.aggregate(query).toArray();

        console.log(res);
        return res

    } catch (err) {

        throw new Error(err);
    } finally {

        client.close();
    }
}
module.exports = fetchRecords