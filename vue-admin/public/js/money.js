Vue.prototype.$echarts = window.echarts

Vue.component("moneyhome",{
   template:"#moneyhome-template",
   data(){
     return {
       time:moment().format("YYYY-MM-DD"),
       ordertotal:0,
       splittotal:0,
       cashTotal:0,
       packTotal:0,
       splitbase:0,
       mymoney:0,
       loading:false,
     }
   },
   mounted:function () {
     this.loading = true
     let that = this
     let href = window.location.href + "/geteveryday"
     this.postData(href,{time:this.time},function (res) {
        let dt = res.data
        if(dt.code == 200){

             let dt = res.data;
             that.ordertotal = (dt.ordertotal/100).toFixed(2);
             that.splittotal = (dt.splittotal/100).toFixed(2);
             that.cashTotal =  (dt.cashTotal/100).toFixed(2);
             that.packTotal =  (dt.packTotal/100).toFixed(2);
             that.splitbase =  (dt.splitbase/100).toFixed(2);
             that.mymoney = ((dt.ordertotal - dt.splittotal - dt.packTotal - dt.splitbase)/100).toFixed(2)

             that.setMyChart(that.ordertotal,that.splittotal,that.cashTotal,that.splitbase,that.packTotal,that.mymoney)

        }//-----code == 200 over
        that.setExample()
        that.loading = false;
     })
   },
   methods:{
      postData:function(href,data,callback){
         axios.post(href,data).then(function (res) {
            console.log(res)
            callback(res)
         }).catch(function (e) {
            console.log(e)
         })
      },
      changeDate:function(val){
        let t = moment(val).format("YYYY-MM-DD")
        let old = moment(this.time).format("YYYY-MM-DD")
        this.loading = true
        if(t.indexOf("-") > 0) {
          let that = this
          let href = window.location.href + "/geteveryday"
          this.postData(href, {time:t},function (res) {
             let dt = res.data;
             if(dt.code == 200){
                  that.ordertotal = (dt.ordertotal/100).toFixed(2);
                  that.splittotal = (dt.splittotal/100).toFixed(2);
                  that.cashTotal =  (dt.cashTotal/100).toFixed(2);
                  that.packTotal =  (dt.packTotal/100).toFixed(2);
                  that.splitbase =  (dt.splitbase/100).toFixed(2);
                  that.mymoney = ((dt.ordertotal - dt.splittotal - dt.packTotal - dt.splitbase)/100).toFixed(2)
                  that.setMyChart(that.ordertotal,that.splittotal,that.cashTotal,that.splitbase,that.packTotal,that.mymoney)
             }//-----code == 200 over
             that.loading = false
          })
        }
      },
      setMyChart:function(ordertotal,splittotal,cashTotal,splitbase,packTotal,mymoney){
        let myToday =  this.$echarts.init(document.getElementById('money-today'));

        let today = {
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}元"
          },
          series : [
            {
              name: '昨日交易',
              type: 'pie',
              radius: '55%',
              label: {
                normal: {
                  formatter: "{b}: {c}元"
                }
              },
              data:[
                {value:splittotal, name:'佣金总额'},
                {value:cashTotal, name:'佣金已提现'},
                {value:packTotal, name:'红包发放'},
                {value:splitbase, name:'平台分成'},
                {value:mymoney, name:'渠道利润'},
                {value:ordertotal, name:'订单总额'}
              ]
            }
          ]
        }
        myToday.setOption(today);
      },
      setExample:function () {
        let myWeek =  this.$echarts.init(document.getElementById('money-week'));
        let week = {
          title: {
            text: '近期交易'
          },
          tooltip: {},
          legend: {
            data:['销量','一级分佣','二级级分佣','三级级分佣','平台分成','红包金额','渠道利润']
          },
          xAxis: {
            data: ["周一","周二","周三","周四","周五","周六"]
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [100, 200, 300, 400, 500, 600]
            },
            {
              name: '一级分佣',
              type: 'bar',
              data: [8, 16, 24, 32, 40, 48]
            },
            {
              name: '二级级分佣',
              type: 'bar',
              data: [4, 8, 12, 16, 20, 24]
            },
            {
              name: '三级级分佣',
              type: 'bar',
              data: [1, 2, 3, 4, 5, 6]
            },
            {
              name: '平台分成',
              type: 'bar',
              data: [6, 12, 18, 24, 30, 36]
            },
            {
              name: '红包金额',
              type: 'bar',
              data: [70, 140, 210, 280, 350, 420]
            },
            {
              name: '渠道利润',
              type: 'bar',
              data: [11, 22, 33, 44, 55, 66]
            },
          ]
        };
        myWeek.setOption(week);
      },
  },
})
