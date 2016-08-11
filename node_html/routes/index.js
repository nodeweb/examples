var www=require('./www');

module.exports = function(app){
   app.use('/m/',www);
}
