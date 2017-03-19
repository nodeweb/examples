var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/build"));
app.listen(6969,()=>{
	console.log("HTTP listening at port 6969!")
});