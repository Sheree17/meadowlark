var express = require('express');
var app = express();

var handlebars= require("express-handlebars").create({ defaultLayout: "main"});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.render("home");
});
var fortunes= ["fortune1","fortune2", "fortune3", fortune4, Fortune5];
app.get('/about', function(req, res){
var randomFortune= fortunes[Math.random() * fortuneCookies.length);
res.render("about=,{fortune:randomFortune});
//res.type("text/plain");
//res.send("About Meadowlark Travel");
});

  res.render("about");
//res.type("text/plain");
//res.send(" About Meadowlark Travel");
  
});
app.get("/travel", function(req, res){
 res.render("travel");
});

app.get("/datetime", function(req, res) {
  res.render("datetime", { datetime: new Date().toString()});
});

// static pages
app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found')
});

//custom 500 page
app.use(function(err, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
console.log( 'Express started on http://localhost:'+
app.get('port') + '; press Ctrl-c to terminate.');
});

