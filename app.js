const express = require ("express");
const bodyParser = require("body-parser");
const request = require ("request");

 

 const app = express ();
 app.listen (3000, function(){
     console.log("server running on port 3000")
 })
 