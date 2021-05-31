const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express ();
const https = require ("https");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public")); 

app.get("/", function(req,res){
    console.log (__dirname)
    res.sendFile(__dirname + "/signup.html"); 
})

app.post("/",function(req,res){
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    const data = {
        members: [
            {
                email_address: email, 
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data)
    const url = "https://us6.api.mailchimp.com/3.0/lists/5f2efa8e62";
    const options = {
        method: "POST",
        auth:"francho1:ead81448be86e014faed14377e4ea9f4-us6"
    }
    
    const request =  https.request(url, options,function (response){
        
        if (response.statusCode === 200) {
            res.sendFile (__dirname + "/success.html")
        }else {
            res.sendFile (__dirname + "/failure.html")
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();

})

app.listen (5500, function(){
     console.log("server running on port 5500")
 })
 



//API KEY
//ead81448be86e014faed14377e4ea9f4-us6

//LIST ID
//5f2efa8e62