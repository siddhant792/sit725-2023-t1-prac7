let client = require('../db');

let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postCat, getAllCats}
