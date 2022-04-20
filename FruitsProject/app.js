
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewURLParser: true });

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number, 
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Awesome as a fruit."
});

//fruit.save();
const personSchema = new mongoose.Schema ({
   name: String,
   occupation: String,
   age: Number 
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    occupation: "unemployed",
    age: 50
});

//person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "Fruit 2"
});

const orange = new Fruit ({
    name: "Orange",
    score: 9,
    review: "Fruit 3"
});

const banana = new Fruit ({
    name: "Banana",
    score: 5,
    review: "Fruit 4"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all fruits to fruitsDB");
    }
})



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