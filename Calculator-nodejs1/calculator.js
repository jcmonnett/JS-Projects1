const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    res.send("Thanks for sending that!");

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = (num1 + num2);

    res.send(result);
});


app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmiResult = (weight / (height * height));

    res.send("Your BMI is " + bmiResult);
});

app.listen(3000, function() {
    console.log("Server is started");
});

