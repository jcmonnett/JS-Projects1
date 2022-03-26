const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
  
                
        });

        app.post("/", function(req, res){
            const query = req.body.cityName;
            const queryUppercase = query.charAt(0).toUpperCase() + query.slice(1);
            const appId = "appid=099e25de7543002d945a2d5a01519568";
            const units = "imperial"
            const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&limit=5&" + appId;
            https.get(url, function(response){
                console.log(response.statusCode);
        
                response.on("data", function(data){
                    const weatherData = JSON.parse(data);
                    const temp = weatherData.main.temp;
                    const feelsLike = weatherData.main.feels_like;
                    const weatherDescription = weatherData.weather[0].description;
                    const icon = weatherData.weather[0].icon;
                    const weatherIcon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                    res.write("<h1>Currently there is " + weatherDescription + " in " + queryUppercase + ". </h1>");
                    res.write("<h1>The temperature in " + queryUppercase +  " is " + temp + " farenheight and it feels like " + feelsLike + " farenheight.</h1>");
                    res.write("<img src=" + weatherIcon + ">");
        });

      

    })

    
})



app.listen(3000, function() {

console.log("Server is running on port 3000.");
});