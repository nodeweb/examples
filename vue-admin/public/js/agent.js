Vue.component("agentlist",{
  template:"#agent-template",
  data() {
    return {
      multipleSelection: [],
      total:0,
      currentPage:1,
      currentNum:100,
      list:[],
      loading:false,
    }
  },
  created:function(){
    let page = this.currentPage
    let num = this.currentNum
    this.loading = true
    let that = this
    this.getData(page,num,function (res) {
      let dt = res.data
      if (dt.code == 200) {
        that.list = dt.results
        that.total = dt.total
        that.loading = false
      } else {
        that.loading = false
      }
    })
  },
  methods: {
    toggleSelection: function (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange: function (val) {
      console.log(val)
      this.multipleSelection = val;
    },
    handleOrder: function (val) {
      console.log("filed=", val.prop)
      console.log("type=", val.order)


      this.loading = true
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentNum = val
      this.loading = true
      let page = this.currentPage
      let that = this

      this.getData(page, val, function (res) {
        let dt = res.data
        if (dt.code == 200) {
          that.list = dt.results
          that.total = dt.total
          that.loading = false
        } else {
          that.loading = false
        }
      })

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.loading = true
      let num = this.currentNum
      let that = this

      this.getData(val, num, function (res) {
        let dt = res.data
        if (dt.code == 200) {
          that.list = dt.results
          that.total = dt.total
          that.loading = false
        } else {
          that.loading = false
        }
      })
    },
    getData: function (page, num, callback) {
      let href = window.location.href
      axios.post(href, {
        page: page,
        num: num,
      }).then(function (res) {
        console.log(res)
        callback(res)
      }).catch(function (e) {
        console.log(e)
      })
    },
    formatDate:function (tm) {
      let dt = moment(tm).format("YYYY-MM-DD HH:mm:ss")
      return dt
    },
    formatMoney:function (m) {
      let my = parseFloat(m/100).toFixed(2)
      return my
    },
    formatBool:function (s) {
      let m = s ? "是" : "否"
      return m
    },
  }
})


