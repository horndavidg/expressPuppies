var express = require("express"); 
var app = express(); 

var puppies = [];
var puppyPics = ["http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg", "http://xrdj144og6l4bdn0u3zy34o9.wpengine.netdna-cdn.com/wp-content/uploads/2015/04/Gorgeous_puppies.jpg", "https://realistrebel.files.wordpress.com/2015/01/cutest-puppy-ever-1384460985_org.jpg", "http://www.pawderosa.com/images/puppies.jpg", "http://www.lifewithdogs.tv/wp-content/uploads/2014/03/3.21.14-National-Puppy-Day5.jpg", "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg", "https://inst.eecs.berkeley.edu/~cs194-26/fa14/upload/files/proj4/cs194-dx/img/puppy.jpg", "http://www.teacupspuppies.com/Puppies2013/yorkie-male-175b.jpg"];
var id = 1;


app.set("view engine","ejs");


app.get("/", function(req,res){

  res.render("index", {puppies:puppies});
});

app.get("/puppies/new", function(req,res){
  res.render("form");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/puppies/:id", function(req,res){
  puppies.forEach(function(puppy) {

    if (puppy.id === Number(req.params.id)) {
      var foundPuppy = puppy;
      res.render("show", {foundPuppy:foundPuppy});
    }
  });

});

app.get("/puppies", function(req,res){
  var puppy = {};
  puppy.puppyName = req.query.puppyName;
  puppy.id = id;
  // puppy.url = "http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg";
  var i = Math.round(Math.random() * 7);
  puppy.url = puppyPics[i];
  // console.log(puppy.url);
  id++;

puppies.push(puppy);
  // console.log(puppies);

res.redirect("/");

});


app.listen(3000, function(){
  console.log("Server Starting on Port: 3000");
});