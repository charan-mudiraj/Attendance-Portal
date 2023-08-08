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
//    res.render("./home");
   res.sendFile(path.join(__dirname + '/views/home.ejs'));
});
app.get('/upload', function(req, res){
    // res.render("./upload");
    res.sendFile(path.join(__dirname + '/views/upload.ejs'));
});
app.get('/status', function(req, res){
    // res.render("./status");
    res.sendFile(path.join(__dirname + '/views/status.ejs'));
});
app.get('/help', function(req, res){
    // res.render("./help");
    res.sendFile(path.join(__dirname + '/views/help.ejs'));
});
app.get('/contact', function(req, res){
    // res.render("./contact");
    res.sendFile(path.join(__dirname + '/views/contact.ejs'));
});
app.get('/about', function(req, res){
    // res.render("./about");
    res.sendFile(path.join(__dirname + '/views/about.ejs'));
});
app.get('/names.txt', function(req, res){
    res.sendFile(path.join(__dirname + '/images/names.txt'));
});
app.get('/script.js', function(req, res){
    res.sendFile(path.join(__dirname + '/scripts/script.js'));
});
app.get('/styles.css', function(req, res){
    res.sendFile(path.join(__dirname + '/scripts/styles.css'));
});
// app.listen(3000, function(){
//     console.log("Started the Server at Port 3000.");
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});