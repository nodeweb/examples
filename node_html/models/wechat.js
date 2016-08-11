var weapi  = require('wechat-api');
var woauth  = require('wechat-oauth');
var fs = require('fs');
var appid = 'wx9cfc3882c007b301';
var appSecret = '207f8b21d69ba3717a843dfe3c9bcf82';

var client = require('./redis');


//---make wechat api---
var api = new weapi(appid, appSecret, function (callback) {
  console.log('api==start=====')
  client.get("access_token", function(err, reply) {
    if(err) callback(err);
    console.log('access_token===+get+===',reply);
    if(reply){
       callback(null, JSON.parse(reply));
    }else{
     callback(null, 'CiMP');
    };
  });   
    
}, function (token, callback) {
  console.log('access_token====+save+====',token);
  client.set("access_token", JSON.stringify(token),callback);
});


//----make wechat web oauth api---
var wapi = new woauth(appid, appSecret, function (openid, callback) { 
  console.log('wapi==start=====');
  client.get("web_token:"+openid, function(err, reply) {
    console.log('web_token===+get+===',reply);
    callback(null, JSON.parse(reply));
  });  
}, function (openid, token, callback) {
  client.set("web_token:"+openid, JSON.stringify(token),callback);
});

//--------exports

exports.api = api;

exports.wapi = wapi;
