//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

  // res.sendFile(__dirname+"/index.html");
  // console.log(req.body.amount);
  // console.log(req.body.crypto);
  // console.log(req.body.fiat);
  // var conversion = req.body.crypto + req.body.fiat;
  // var finalURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+conversion;
  // request(finalURL,function(erroe,response,body){
  // var baseURL="https://apiv2.bitcoinaverage.com/indices/global/";
  //from 'request' documentation
  var options = {
    url : "https://apiv2.bitcoinaverage.com/convert/global",
    method:"GET",
    qs:{
      from:req.body.crypto, //from API documentation
      to:req.body.fiat,
      amount:req.body.amount
    }
  };
  request(options,function(error, response, body){
    var data = JSON.parse(body);
    var price = data.price;
    // var price = data.averages.week;
    // console.log(price);
    var message = "<h1>"+req.body.amount+ " "+ req.body.crypto + " is currently "+ price+ " "+ req.body.fiat+" </h1>";
    res.write("<p>The current date is "+data.time+"</p>");
    res.write(message);
    res.send();
    // res.send(message);
  });
});




app.listen(port, function(){
  console.log("Server is running on port "+ port);
});
