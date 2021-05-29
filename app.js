const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express ();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public")); 

app.get("/", function(req,res){
    console.log (__dirname)
    res.sendFile(__dirname + "/signup.html"); 
})

app.post("/",function(req,res){
    var firstName = req.body.fName
    var lastName = req.body.lName
    var email = req.body.email
    console.log (firstName, lastName, email)
})

app.listen (5503, function(){
     console.log("server running on port 5500")
 })
 



