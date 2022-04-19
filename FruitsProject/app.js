

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



//Connection URL 
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'fruitsDB';

//Create  a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

//User connect method to connect to the servers
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

   findDocument(db, function() {
        client.close();
    });  
});

const insertDocument = function(db, callback) {

    //Get the documents collections
    const collection = db.collection('fruits');
    //Insert some documents
    collection.insertMany([
        {
        name : "Apple",
        score: 8,
        review: "Great fruit"
        },
        {
        name : "Orange",
        score: 5,
        review: "Acidic?"
        },
        {
        name : "Strawberry",
        score: 9,
        review: "Good with other foods!"
        }
    ], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted 3 documents into collection");
        callback(result);
    });

}
const findDocument = function(db, callback) {

    //Get the documents collections
    const collection = db.collection('fruits');
    //Find some documents
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}