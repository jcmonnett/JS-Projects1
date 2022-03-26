const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html")

});

app.post("/", function (req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            { 
                email_address: email,
                status: "subscribed",
                merge_field: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/86fe6b1fc4";

    const options = {
        method: "POST",
        auth: "jcmonnett:8254563084694c932101edf4cc92bca6-us14"
    }

    const request = https.request(url, options, function(response) {

        if (response.StatusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();

});


app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(3000, function (){
    console.log("Server is started");
});



// API Key - 8254563084694c932101edf4cc92bca6-us14

// Audience ID/List ID - 86fe6b1fc4