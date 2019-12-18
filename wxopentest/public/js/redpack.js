Vue.component("redpackset",{
  template:"#redpack-template",
  data() {
    return {
      loading:false,

      s10A:1,
      m10A:1,
      s10B:1,
      m10B:1,
      s10C:1,
      m10C:1,
      s10D:1,
      m10D:1,
      s10E:1,
      m10E:1,
      s10F:1,
      m10F:1,
      s10G:1,
      m10G:1,
      s10H:1,
      m10H:1,

      sm10A:1,
      sm10B:1,
      sm10C:1,
      sm10D:1,
      sm10E:1,
      sm10F:1,
      sm10G:1,
      sm10H:1,
      s10All:8,
      sm10All:8,

      edit10:true,
      do10:false,

      s20A:1,
      m20A:1,
      s20B:1,
      m20B:1,
      s20C:1,
      m20C:1,
      s20D:1,
      m20D:1,
      s20E:1,
      m20E:1,
      s20F:1,
      m20F:1,
      s20G:1,
      m20G:1,
      s20H:1,
      m20H:1,
      sm20A:1,
      sm20B:1,
      sm20C:1,
      sm20D:1,
      sm20E:1,
      sm20F:1,
      sm20G:1,
      sm20H:1,
      s20All:8,
      sm20All:8,
      edit20:true,
      do20:false,

      s50A:1,
      m50A:1,
      s50B:1,
      m50B:1,
      s50C:1,
      m50C:1,
      s50D:1,
      m50D:1,
      s50E:1,
      m50E:1,
      s50F:1,
      m50F:1,
      s50G:1,
      m50G:1,
      s50H:1,
      m50H:1,
      sm50A:1,
      sm50B:1,
      sm50C:1,
      sm50D:1,
      sm50E:1,
      sm50F:1,
      sm50G:1,
      sm50H:1,
      s50All:8,
      sm50All:8,
      edit50:true,
      do50:false,

      s100A:1,
      m100A:1,
      s100B:1,
      m100B:1,
      s100C:1,
      m100C:1,
      s100D:1,
      m100D:1,
      s100E:1,
      m100E:1,
      s100F:1,
      m100F:1,
      s100G:1,
      m100G:1,
      s100H:1,
      m100H:1,
      sm100A:1,
      sm100B:1,
      sm100C:1,
      sm100D:1,
      sm100E:1,
      sm100F:1,
      sm100G:1,
      sm100H:1,
      s100All:8,
      sm100All:8,
      edit100:true,
      do100:false,
    };
  },
  created:function(){
    this.loading = true
    let that = this
    let href = window.location.href
    this.postData(href,{},function (res) {
      let dt = res.data;
      let m10 = dt.m10
      let m20 = dt.m20
      let m50 = dt.m50
      let m100 = dt.m100

      if(m10) {
        that.s10A = m10.AScale;
        that.m10A = (m10.AMoney / 100).toFixed(2);
        that.s10B = m10.BScale;
        that.m10B = (m10.BMoney / 100).toFixed(2);
        that.s10C = m10.CScale;
        that.m10C = (m10.CMoney / 100).toFixed(2);
        that.s10D = m10.DScale;
        that.m10D = (m10.DMoney / 100).toFixed(2);
        that.s10E = m10.EScale;
        that.m10E = (m10.EMoney / 100).toFixed(2);
        that.s10F = m10.FScale;
        that.m10F = (m10.FMoney / 100).toFixed(2);
        that.s10G = m10.GScale;
        that.m10G = (m10.GMoney / 100).toFixed(2);
        that.s10H = m10.HScale;
        that.m10H = (m10.HMoney / 100).toFixed(2);
        that.s10All = that.s10A + that.s10B + that.s10C + that.s10D + that.s10E + that.s10F + that.s10G + that.s10H;
        that.sm10A = that.s10A * that.m10A
        that.sm10B = that.s10B * that.m10B
        that.sm10C = that.s10C * that.m10C
        that.sm10D = that.s10D * that.m10D
        that.sm10E = that.s10E * that.m10E
        that.sm10F = that.s10F * that.m10F
        that.sm10G = that.s10G * that.m10G
        that.sm10H = that.s10H * that.m10H
        that.sm10All = that.sm10A + that.sm10B + that.sm10C + that.sm10D + that.sm10E + that.sm10F + that.sm10G + that.sm10H
      }

      if(m20) {
        that.s20A = m20.AScale;
        that.m20A = (m20.AMoney / 100).toFixed(2);
        that.s20B = m20.BScale;
        that.m20B = (m20.BMoney / 100).toFixed(2);
        that.s20C = m20.CScale;
        that.m20C = (m20.CMoney / 100).toFixed(2);
        that.s20D = m20.DScale;
        that.m20D = (m20.DMoney / 100).toFixed(2);
        that.s20E = m20.EScale;
        that.m20E = (m20.EMoney / 100).toFixed(2);
        that.s20F = m20.FScale;
        that.m20F = (m20.FMoney / 100).toFixed(2);
        that.s20G = m20.GScale;
        that.m20G = (m20.GMoney / 100).toFixed(2);
        that.s20H = m20.HScale;
        that.m20H = (m20.HMoney / 100).toFixed(2);
        that.s20All = that.s20A + that.s20B + that.s20C + that.s20D + that.s20E + that.s20F + that.s20G + that.s20H;
        that.sm20A = that.s20A * that.m20A
        that.sm20B = that.s20B * that.m20B
        that.sm20C = that.s20C * that.m20C
        that.sm20D = that.s20D * that.m20D
        that.sm20E = that.s20E * that.m20E
        that.sm20F = that.s20F * that.m20F
        that.sm20G = that.s20G * that.m20G
        that.sm20H = that.s20H * that.m20H
        that.sm20All = that.sm20A + that.sm20B + that.sm20C + that.sm20D + that.sm20E + that.sm20F + that.sm20G + that.sm20H
      }

      if(m50) {
        that.s50A = m50.AScale;
        that.m50A = (m50.AMoney / 100).toFixed(2);
        that.s50B = m50.BScale;
        that.m50B = (m50.BMoney / 100).toFixed(2);
        that.s50C = m50.CScale;
        that.m50C = (m50.CMoney / 100).toFixed(2);
        that.s50D = m50.DScale;
        that.m50D = (m50.DMoney / 100).toFixed(2);
        that.s50E = m50.EScale;
        that.m50E = (m50.EMoney / 100).toFixed(2);
        that.s50F = m50.FScale;
        that.m50F = (m50.FMoney / 100).toFixed(2);
        that.s50G = m50.GScale;
        that.m50G = (m50.GMoney / 100).toFixed(2);
        that.s50H = m50.HScale;
        that.m50H = (m50.HMoney / 100).toFixed(2);
        that.s50All = that.s50A + that.s50B + that.s50C + that.s50D + that.s50E + that.s50F + that.s50G + that.s50H;
        that.sm50A = that.s50A * that.m50A
        that.sm50B = that.s50B * that.m50B
        that.sm50C = that.s50C * that.m50C
        that.sm50D = that.s50D * that.m50D
        that.sm50E = that.s50E * that.m50E
        that.sm50F = that.s50F * that.m50F
        that.sm50G = that.s50G * that.m50G
        that.sm50H = that.s50H * that.m50H
        that.sm50All = that.sm50A + that.sm50B + that.sm50C + that.sm50D + that.sm50E + that.sm50F + that.sm50G + that.sm50H
      }

      if(m100) {
        that.s100A = m100.AScale;
        that.m100A = (m100.AMoney / 100).toFixed(2);
        that.s100B = m100.BScale;
        that.m100B = (m100.BMoney / 100).toFixed(2);
        that.s100C = m100.CScale;
        that.m100C = (m100.CMoney / 100).toFixed(2);
        that.s100D = m100.DScale;
        that.m100D = (m100.DMoney / 100).toFixed(2);
        that.s100E = m100.EScale;
        that.m100E = (m100.EMoney / 100).toFixed(2);
        that.s100F = m100.FScale;
        that.m100F = (m100.FMoney / 100).toFixed(2);
        that.s100G = m100.GScale;
        that.m100G = (m100.GMoney / 100).toFixed(2);
        that.s100H = m100.HScale;
        that.m100H = (m100.HMoney / 100).toFixed(2);
        that.s100All = that.s100A + that.s100B + that.s100C + that.s100D + that.s100E + that.s100F + that.s100G + that.s100H;
        that.sm100A = that.s100A * that.m100A
        that.sm100B = that.s100B * that.m100B
        that.sm100C = that.s100C * that.m100C
        that.sm100D = that.s100D * that.m100D
        that.sm100E = that.s100E * that.m100E
        that.sm100F = that.s100F * that.m100F
        that.sm100G = that.s100G * that.m100G
        that.sm100H = that.s100H * that.m100H
        that.sm100All = that.sm100A + that.sm100B + that.sm100C + that.sm100D + that.sm100E + that.sm100F + that.sm100G + that.sm100H
      }
      that.loading = false
    })
  },
  methods: {
    postData:function(href,data,callback){
      axios.post(href,data).then(function (res) {
        console.log(res)
        callback(res)
      }).catch(function (e) {
        console.log(e)
      })
    },
    changeEdit10:function() {//-----------10设置----------------
      this.edit10 = !this.edit10
    },
    saveEdit10:function() {
      this.do10 = !this.do10
      let href = window.location.href + "/m10"
      this.loading = true;
      let that = this;
      let data = {
        s10A: this.s10A,
        m10A: Math.floor(this.m10A*100),
        s10B: this.s10B,
        m10B: Math.floor(this.m10B*100),
        s10C: this.s10C,
        m10C: Math.floor(this.m10C*100),
        s10D: this.s10D,
        m10D: Math.floor(this.m10D*100),
        s10E: this.s10E,
        m10E: Math.floor(this.m10E*100),
        s10F: this.s10F,
        m10F: Math.floor(this.m10F*100),
        s10G: this.s10G,
        m10G: Math.floor(this.m10G*100),
        s10H: this.s10H,
        m10H: Math.floor(this.m10H*100),
      }
      this.postData(href,data,function (res) {
        let dt = res.data;
        that.loading = false
        that.do10 = !that.do10
        that.edit10 = !that.edit10
      })
    },
    changes10:function(val) {
      this.s10All = this.s10A + this.s10B + this.s10C + this.s10D + this.s10E + this.s10F + this.s10G + this.s10H;
      this.sm10A = this.s10A * this.m10A
      this.sm10B = this.s10B * this.m10B
      this.sm10C = this.s10C * this.m10C
      this.sm10D = this.s10D * this.m10D
      this.sm10E = this.s10E * this.m10E
      this.sm10F = this.s10F * this.m10F
      this.sm10G = this.s10G * this.m10G
      this.sm10H = this.s10H * this.m10H
      this.sm10All = (this.sm10A + this.sm10B + this.sm10C + this.sm10D + this.sm10E + this.sm10F + this.sm10G + this.sm10H).toFixed(2)
    },
    changem10:function(val) {
      this.sm10A = this.s10A * this.m10A
      this.sm10B = this.s10B * this.m10B
      this.sm10C = this.s10C * this.m10C
      this.sm10D = this.s10D * this.m10D
      this.sm10E = this.s10E * this.m10E
      this.sm10F = this.s10F * this.m10F
      this.sm10G = this.s10G * this.m10G
      this.sm10H = this.s10H * this.m10H
      this.sm10All = this.sm10A + this.sm10B + this.sm10C + this.sm10D + this.sm10E + this.sm10F + this.sm10G + this.sm10H
    },
    restart10:function(val) {
        this.loading = true;
        let href = window.location.href + "/makeredpack"
        let that = this
        this.postData(href,{red:10},function (res) {
          that.loading = false;
          let dt = res.data
          let tip = dt.code==200 ? "重新生成1000个包成功" : "重新生成1000个包失败";
          let title = dt.code==200 ? "设置成功" : "设置失败";
          that.$alert(tip, title, {
            confirmButtonText: '我知道了',
            callback: action => {
              console.log(action)
            }
          })
        })
    },
    changeEdit20:function() {//-----------20设置-------------------
      this.edit20 = !this.edit20
    },
    saveEdit20:function() {
      this.do20 = !this.do20
      let href = window.location.href + "/m20"
      this.loading = true;
      let that = this;
      let data = {
        s20A: this.s20A,
        m20A: Math.floor(this.m20A*100),
        s20B: this.s20B,
        m20B: Math.floor(this.m20B*100),
        s20C: this.s20C,
        m20C: Math.floor(this.m20C*100),
        s20D: this.s20D,
        m20D: Math.floor(this.m20D*100),
        s20E: this.s20E,
        m20E: Math.floor(this.m20E*100),
        s20F: this.s20F,
        m20F: Math.floor(this.m20F*100),
        s20G: this.s20G,
        m20G: Math.floor(this.m20G*100),
        s20H: this.s20H,
        m20H: Math.floor(this.m20H*100),
      }
      this.postData(href,data,function (res) {
        let dt = res.data;
        that.loading = false
        that.do20 = !that.do20
        that.edit20 = !that.edit20
      })
    },
    changes20:function(val) {
      this.s20All = this.s20A + this.s20B + this.s20C + this.s20D + this.s20E + this.s20F + this.s20G + this.s20H;
      this.sm20A = this.s20A * this.m20A
      this.sm20B = this.s20B * this.m20B
      this.sm20C = this.s20C * this.m20C
      this.sm20D = this.s20D * this.m20D
      this.sm20E = this.s20E * this.m20E
      this.sm20F = this.s20F * this.m20F
      this.sm20G = this.s20G * this.m20G
      this.sm20H = this.s20H * this.m20H
      this.sm20All = (this.sm20A + this.sm20B + this.sm20C + this.sm20D + this.sm20E + this.sm20F + this.sm20G + this.sm20H).toFixed(2)
    },
    changem20:function(val) {
      this.sm20A = this.s20A * this.m20A
      this.sm20B = this.s20B * this.m20B
      this.sm20C = this.s20C * this.m20C
      this.sm20D = this.s20D * this.m20D
      this.sm20E = this.s20E * this.m20E
      this.sm20F = this.s20F * this.m20F
      this.sm20G = this.s20G * this.m20G
      this.sm20H = this.s20H * this.m20H
      this.sm20All = this.sm20A + this.sm20B + this.sm20C + this.sm20D + this.sm20E + this.sm20F + this.sm20G + this.sm20H
    },
    restart20:function(val) {
      this.loading = true;
      let href = window.location.href + "/makeredpack"
      let that = this
      this.postData(href,{red:20},function (res) {
        that.loading = false;
        let dt = res.data
        let tip = dt.code==200 ? "重新生成1000个包成功" : "重新生成1000个包失败";
        let title = dt.code==200 ? "设置成功" : "设置失败";
        that.$alert(tip, title, {
          confirmButtonText: '我知道了',
          callback: action => {
            console.log(action)
          }
        })
      })
    },
    changeEdit50:function() {//-----------50设置-------------------
      this.edit50 = !this.edit50
    },
    saveEdit50:function() {
      this.do50 = !this.do50
      let href = window.location.href + "/m50"
      this.loading = true;
      let that = this;
      let data = {
        s50A: this.s50A,
        m50A: Math.floor(this.m50A*100),
        s50B: this.s50B,
        m50B: Math.floor(this.m50B*100),
        s50C: this.s50C,
        m50C: Math.floor(this.m50C*100),
        s50D: this.s50D,
        m50D: Math.floor(this.m50D*100),
        s50E: this.s50E,
        m50E: Math.floor(this.m50E*100),
        s50F: this.s50F,
        m50F: Math.floor(this.m50F*100),
        s50G: this.s50G,
        m50G: Math.floor(this.m50G*100),
        s50H: this.s50H,
        m50H: Math.floor(this.m50H*100),
      }
      this.postData(href,data,function (res) {
        let dt = res.data;
        that.loading = false
        that.do50 = !that.do50
        that.edit50 = !that.edit50
      })
    },
    changes50:function(val) {
      this.s50All = this.s50A + this.s50B + this.s50C + this.s50D + this.s50E + this.s50F + this.s50G + this.s50H;
      this.sm50A = this.s50A * this.m50A
      this.sm50B = this.s50B * this.m50B
      this.sm50C = this.s50C * this.m50C
      this.sm50D = this.s50D * this.m50D
      this.sm50E = this.s50E * this.m50E
      this.sm50F = this.s50F * this.m50F
      this.sm50G = this.s50G * this.m50G
      this.sm50H = this.s50H * this.m50H
      this.sm50All = (this.sm50A + this.sm50B + this.sm50C + this.sm50D + this.sm50E + this.sm50F + this.sm50G + this.sm50H).toFixed(2)
    },
    changem50:function(val) {
      this.sm50A = this.s50A * this.m50A
      this.sm50B = this.s50B * this.m50B
      this.sm50C = this.s50C * this.m50C
      this.sm50D = this.s50D * this.m50D
      this.sm50E = this.s50E * this.m50E
      this.sm50F = this.s50F * this.m50F
      this.sm50G = this.s50G * this.m50G
      this.sm50H = this.s50H * this.m50H
      this.sm50All = this.sm50A + this.sm50B + this.sm50C + this.sm50D + this.sm50E + this.sm50F + this.sm50G + this.sm50H
    },
    restart50:function(val) {
      this.loading = true;
      let href = window.location.href + "/makeredpack"
      let that = this
      this.postData(href,{red:50},function (res) {
        that.loading = false;
        let dt = res.data
        let tip = dt.code==200 ? "重新生成1000个包成功" : "重新生成1000个包失败";
        let title = dt.code==200 ? "设置成功" : "设置失败";
        that.$alert(tip, title, {
          confirmButtonText: '我知道了',
          callback: action => {
            console.log(action)
          }
        })
      })
    },
    changeEdit100:function() {//-----------100设置-------------------
      this.edit100 = !this.edit100
    },
    saveEdit100:function() {
      this.do100 = !this.do100
      let href = window.location.href + "/m100"
      this.loading = true;
      let that = this;
      let data = {
        s100A: this.s100A,
        m100A: Math.floor(this.m100A*100),
        s100B: this.s100B,
        m100B: Math.floor(this.m100B*100),
        s100C: this.s100C,
        m100C: Math.floor(this.m100C*100),
        s100D: this.s100D,
        m100D: Math.floor(this.m100D*100),
        s100E: this.s100E,
        m100E: Math.floor(this.m100E*100),
        s100F: this.s100F,
        m100F: Math.floor(this.m100F*100),
        s100G: this.s100G,
        m100G: Math.floor(this.m100G*100),
        s100H: this.s100H,
        m100H: Math.floor(this.m100H*100),
      }
      this.postData(href,data,function (res) {
        let dt = res.data;
        that.loading = false
        that.do100 = !that.do100
        that.edit100 = !that.edit100
      })
    },
    changes100:function(val) {
      this.s100All = this.s100A + this.s100B + this.s100C + this.s100D + this.s100E + this.s100F + this.s100G + this.s100H;
      this.sm100A = this.s100A * this.m100A
      this.sm100B = this.s100B * this.m100B
      this.sm100C = this.s100C * this.m100C
      this.sm100D = this.s100D * this.m100D
      this.sm100E = this.s100E * this.m100E
      this.sm100F = this.s100F * this.m100F
      this.sm100G = this.s100G * this.m100G
      this.sm100H = this.s100H * this.m100H
      this.sm100All = (this.sm100A + this.sm100B + this.sm100C + this.sm100D + this.sm100E + this.sm100F + this.sm100G + this.sm100H).toFixed(2)
    },
    changem100:function(val) {
      this.sm100A = this.s100A * this.m100A
      this.sm100B = this.s100B * this.m100B
      this.sm100C = this.s100C * this.m100C
      this.sm100D = this.s100D * this.m100D
      this.sm100E = this.s100E * this.m100E
      this.sm100F = this.s100F * this.m100F
      this.sm100G = this.s100G * this.m100G
      this.sm100H = this.s100H * this.m100H
      this.sm100All = this.sm100A + this.sm100B + this.sm100C + this.sm100D + this.sm100E + this.sm100F + this.sm100G + this.sm100H
    },
    restart100:function(val) {
      this.loading = true;
      let href = window.location.href + "/makeredpack"
      let that = this
      this.postData(href,{red:100},function (res) {
        that.loading = false;
        let dt = res.data
        let tip = dt.code==200 ? "重新生成1000个包成功" : "重新生成1000个包失败";
        let title = dt.code==200 ? "设置成功" : "设置失败";
        that.$alert(tip, title, {
          confirmButtonText: '我知道了',
          callback: action => {
            console.log(action)
          }
        })
      })
    },
  }
})
