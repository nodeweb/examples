var mongoose = require('mongoose');
var schema = mongoose.Schema;

//----------Schema-----------------------------------------------------------------------

var _Wxin = new schema({
    openid:String,
    nickname:String,
    createTime:Date,
    gz:{type:String,default:'yes'},
    upTime:Date,
    signin:{type:Date,default:' '},
    credit:{type:Number,default:0},
    headimgurl:String,
    sceneId:{type:String,default:' '}
});

var _Post = new schema({
    menu:String,
    title:String,
    auth:String,
    index:{type:Number,default:0},
    trade:{type:String,default:''},
    openid:{type:String,default:''},
    headimgurl:{type:String,default:''},
    nickname:{type:String,default:''},
    edid:{type:String,default:''},
    edhead:{type:String,default:''},
    ednickname:{type:String,default:''},
    type:String,
    dir:String,
    view :String,
    media :String,
    content:String,
    vip:{type:Boolean,default:false},
    vadmin:{type:String,default:''},
    pv:{type:Number,default:0},
    click:{type:Number,default:0},
    createdOn:String,
    publish:{type:Boolean,default:false},
    cfoucs:{type:Boolean,default:false},
    rfoucs:{type:Boolean,default:false},
    prev:{type:String,default:'none'},
    next:{type:String,default:'none'},
    next2:{type:String,default:'none'},
    ptitle:{type:String,default:'none'},
    ntitle:{type:String,default:'none'},
    n2title:{type:String,default:'none'}
});

var _Visitor=new schema({
    openid:String,
    nickname:String,
    headimgurl:String,
    name:String,
    company:String,
    mobile:String,
    createdOn:Date,
    type:String
});

var _Toutiao=new schema({
    mobile:String,
    type:String,
    createdOn:Date
});

//------------------model---------------------------------------------------------------
var Wxin = mongoose.model('wxin',_Wxin);
var Post = mongoose.model('post',_Post);
var Visitor = mongoose.model('visitor',_Visitor);
var Toutiao = mongoose.model('toutiao',_Toutiao);

//------------------export--------------------------------------------------------------
exports.Wxin = Wxin;
exports.Post = Post;
exports.Visitor=Visitor;
exports.Toutiao=Toutiao;


