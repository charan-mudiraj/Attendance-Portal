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
   res.render("./home", {home: 'active', upload: '', status: '', help: '', contact: '', about: ''});
});
app.get('/upload', function(req, res){
    res.render("./upload", {home: '', upload: 'active', status: '', help: '', contact: '', about: ''});
});
app.get('/status', function(req, res){
    res.render("./status", {home: '', upload: '', status: 'active', help: '', contact: '', about: ''});
});
app.get('/help', function(req, res){
    res.render("./help", {home: '', upload: '', status: '', help: 'active', contact: '', about: ''});
});
app.get('/contact', function(req, res){
    res.render("./contact", {home: '', upload: '', status: '', help: '', contact: 'active', about: ''});
});
app.get('/about', function(req, res){
    res.render("./about", {home: '', upload: '', status: '', help: '', contact: '', about: 'active'});
});

app.listen(3000, function(){
    console.log("Started the Server at Port 3000.");
})