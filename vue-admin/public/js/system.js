Vue.component('systemlist',{
  template:"#system-template",
  props:["tm"],
  data(){
    return {
      open: true,
      web_statu:false,
      webDis:false,
      switchDis:false,
      numA:0,
      numB:0,
      numC:0,
      numD:0,
      editA:true,
      editDis:false,
      loading:false,
      qrImg: '',
      qqImg: '',
      qrHeight:"height:0",
      qqHeight:"height:0",
      qrDo:"http://m1",
      webDo:"http://m2",
      wxDo:"http://m3",
      editB:true,
      doDis:false,
    };
  },
  created:function(){
     let href = window.location.href
     this.loading = true;
     let that = this
     this.getDate(href,{},function(res){
        let t = res.data
        let tm = moment().format("YYYYMMDDHHmmss")
        let statu = !t.web_statu || t.web_statu == "no" ? false : true;
        that.open = t.IsTransfers;
        that.web_statu = statu;
        that.numA = t.OneScale
        that.numB = t.TwoScale
        that.numC = t.ThreeScale
        that.numD = t.BaseScale
        that.qrImg = t.QrImg + "?" + tm;
        that.qqImg = t.QqImg + "?" + tm;
        that.qrDo = t.QrDomain
        that.webDo = t.WebDomain
        that.wxDo = t.WxDomain
        that.loading = false

     })
  },
  mounted:function(){
     let qr = document.querySelector(".qrcode")
     let qq = document.querySelector(".qqun")
     let that = this
     setTimeout(function () {
        that.qrHeight = "height:100%"
        that.qqHeight = "height:100%"
     },1000)
  },
  methods:{
    getDate:function(href,data,callback){
      axios.post(href,data).then(function (res) {
        console.log(res)
        callback(res)
      }).catch(function (e) {
        console.log(e)
      })
    },
    switchChange:function (val) {
       this.switchDis =true
       console.log("提现开关",val)
       let that = this
       let href = window.location.href + "/tixian"
       this.getDate(href,{open:val},function(res){
         that.switchDis =false
         let dt = res.data
         if(dt.code == 200) {
           that.open = val
           let tip = val ? "已开启代理商提现功能" : "已关闭代理商提现功能";
           that.$alert(tip, '设置成功', {
             confirmButtonText: '我知道了',
             callback: action => {
               console.log(action)
             }
           })
         }
       })
    },
    webChange:function (val) {
      this.webDis =true
      console.log("网站开关",val)
      let that = this
      let statu = val ? "yes" : "no";
      let href = window.location.href + "/setwebstatu"
      this.getDate(href,{web_statu:statu},function(res){
        that.webDis =false
        let dt = res.data
        if(dt.code == 200) {
          that.web_statu = val
          let tip = val ? "已开启网站访问" : "已关闭网站访问";
          that.$alert(tip, '设置成功', {
            confirmButtonText: '我知道了',
            callback: action => {
              console.log(action)
            }
          })
        }
      })
    },
    changeEditA:function () {
       this.editA = !this.editA
       console.log(this.editA)
    },
    saveEditA:function(){
      this.editDis = !this.editDis
      let that = this
      let href = window.location.href + "/fenyong"
      this.getDate(href,{numA:this.numA,numB:this.numB,numC:this.numC},function(res){
        that.editA = !that.editA
        that.editDis = !that.editDis
        let dt = res.data
        if(dt.code == 200) {
          let tip = "系统分佣比例修改成功";
          that.$alert(tip, '设置成功', {
            confirmButtonText: '我知道了',
            callback: action => {
              console.log(action)
            }
          })
        }
      })
    },
    changeEditB:function () {
      this.editB = !this.editB
      console.log(this.editB)
    },
    saveEditB:function(){
      this.doDis = !this.doDis
      let that = this
      let href = window.location.href + "/domain"
      this.getDate(href,{wxDo:this.wxDo,webDo:this.webDo,qrDo:this.qrDo},function (res) {
        let dt = res.data
        that.editB = !that.editB
        that.doDis = !that.doDis
        if(dt.code == 200) {
          let tip = "业务域名修改成功";
          that.$alert(tip, '设置成功', {
            confirmButtonText: '我知道了',
            callback: action => {
              console.log(action)
            }
          })
        }
      })
    },
    handleQQSuccess:function(res, file) {
      console.log(res)
      let dt = res
      if(dt.code == 200) {
        let t = moment().format("YYYYMMDDHHmmss")
        this.qqImg = dt.imgUrl + "?t=" + t;
      }
    },
    beforeQQUpload:function(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleQRSuccess:function(res, file) {
      console.log(res)
      let dt = res
      if(dt.code == 200) {
        let t = moment().format("YYYYMMDDHHmmss")
        this.qrImg = dt.imgUrl + "?t=" + t;
      }
    },
    beforeQRUpload:function(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
})
