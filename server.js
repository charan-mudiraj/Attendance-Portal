const ejs = require('ejs');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


const app = express();

app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', function(req, res){
   res.render("./home");
});
app.get('/upload', function(req, res){
    res.render("./upload");
});
app.get('/status', function(req, res){
    res.render("./status");
});
app.get('/help', function(req, res){
    res.render("./help");
});
app.get('/contact', function(req, res){
    res.render("./contact");
});
app.get('/about', function(req, res){
    res.render("./about");
});

app.listen(3000, function(){
    console.log("Started the Server at Port 3000.");
})