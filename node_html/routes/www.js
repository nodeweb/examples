var express = require('express');
var router = express.Router();

var xy_type=require('../models/xueyuan').xy_type;

module.exports=router;
//----------------------------

router.get('/xueyuan',xy_type);

