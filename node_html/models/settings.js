var port = 27017;
var localhost='127.0.0.0';
var basename  = 'x-ui';
var url = 'mongodb://'+localhost+':'+port+'/'+basename;
var secret = 'www*x-ui*com';
var key = 'xUser';

module.exports = {
       url:url,
       secret:secret,
       key:key
};
