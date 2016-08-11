var jsSHA = require('jssha');
var api  = require('../models/wechat').api;
var appid = 'wx9cfc3882c007b301';
var appSecret = '207f8b21d69ba3717a843dfe3c9bcf82';


module.exports = function(url,callback){
  var data = {};
  console.log('wx_share_url=',url);
  //--noncestr
  var createNonceStr = function() {
     return Math.random().toString(36).substr(2, 15);
  };
  //--timestamp
  var createTimeStamp = function () {
   return parseInt(new Date().getTime() / 1000) + '';
  };
  api.getLatestTicket(function(err,resp){
         console.log('A-ticket=',resp);
         var ticket    = resp?resp.ticket:'sM4AOVdWfPE4DxkXGEs8VIYldfDgOW8FGSUwq9RpkAJxNbQk2ugYA_35btFUSQ0nVCI9kQIfuQ2rgMpSDiKeag';
         var noncestr  = createNonceStr();
         var timestamp = createTimeStamp();
         //---signature
         var calcSignature = function (ticket, noncestr, ts, url) {
            var str = 'jsapi_ticket=' + ticket + '&noncestr=' + noncestr + '&timestamp='+ ts +'&url=' + url;
            var shaObj = new jsSHA('SHA-1', 'TEXT');
            shaObj.update(str);
            return shaObj.getHash('HEX');
         }
         var signature = calcSignature(ticket, noncestr, timestamp, url);
         data = {
          appId:appid,
          timestamp:timestamp,
          nonceStr:noncestr,
          signature:signature
         }
         console.log('AA=',data);
         callback(data);
    });
};
