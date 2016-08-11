var redis = require("redis");
var client = redis.createClient('6379','127.0.0.1');

client.on("error", function(err) {
  console.log("Error " + err);
});

client.on("connect",function(){
  console.log('redis is running............');
});

module.exports= client;
