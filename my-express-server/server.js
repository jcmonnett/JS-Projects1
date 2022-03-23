const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, how are you?</h1>");
    console.log(req);
});

app.get("/contact", function(req, res){
    res.send("Contact me at xxxx@gmail.com.");
});

app.get("/about", function (req, res){
    res.send("This is my about me page. Yes Please!");
});

app.listen(3000, function() {
    console.log("Server has started on port 3000.");
});