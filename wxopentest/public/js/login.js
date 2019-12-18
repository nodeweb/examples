new Vue({
  el:"#login",
  data:function () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else if (value.length < 5) {
          callback(new Error('请输入正确的用户名'));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if(value.length < 5) {
        callback(new Error('请输入正确的密码'));
      } else {
        callback();
      }
    };

    return {
      ruleForm2: {
        pass: '',
        name: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    };
  },
  methods:{
    submitForm:function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let href = window.location.href
          let base = href.slice(0,href.lastIndexOf("/"))
          axios.post(href,{
            name:this.ruleForm2.name,
            pass:this.ruleForm2.pass
          }).then(function (res) {
            let ds = res.data
            if(ds.code == 200){
               window.location.href = base + "/money"
            }else{
               alert("用户名/密码不正确")
            }
          }).catch(function (e) {
            console.log('error submit!!');
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
})
