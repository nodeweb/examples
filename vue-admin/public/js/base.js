Vue.component("navbar",{
  template:"#navbar-template",
  props:["iscollapse","num","height"],
  methods: {
    handleOpen:function(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gohref:function(key){
      console.log(key)
      let base = window.location.href
      window.location.href = base.slice(0,base.lastIndexOf("/")+1) + key
    }
  }
})


var root = new Vue({
  el:"#root",
  data:{
    isCollapse: true,
  },
  created:function(){
    let t = Cookies.get("isCollapse")
    if(t === undefined){
      let tip = this.isCollapse ? "yes" : "no"
      Cookies.set('isCollapse', tip , { expires: 1 });
    }else{
      let tip = t =="yes" ? true : false;
      this.isCollapse = tip
    }
  },
  methods:{
    changeShow:function () {
      this.isCollapse = !this.isCollapse
      let tip = this.isCollapse ? "yes" : "no"
      Cookies.set('isCollapse', tip , { expires: 1 });
      console.log("==change=set===cookies==ok====")
    },
    widow_height:function(){
      let h = document.documentElement.clientHeight || document.body.clientHeight;
      return "height: 100%;min-height:" + h +"px"
    },
  }
})
