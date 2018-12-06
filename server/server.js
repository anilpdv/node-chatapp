var express     = require("express");
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");
var path        = require("path");

// path
const publicPath = path.join(__dirname,"../public");
var app = express();

// configure
app.use(express.static(publicPath));
var port = process.env.PORT || 3000;
// listen to port:3000
app.listen(port,()=>{
    console.log("[chat code app] app is running on port: " +port);
    setTimeout(function(){
    console.log("[chat code app] app started...");
    },2000);
    setTimeout(function(){
        console.log("[chat code app] happy coding!\(.-.)/");
    },1000);
    setTimeout(function(){
    console.log("[chat code app] click here https://localhost:3000");
    },3000);
});
