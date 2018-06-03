package mysqlConf

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	_ "github.com/go-sql-driver/mysql"
)

var Mydb *gorm.DB

func init() {
   var err error
   Mydb,err = gorm.Open("mysql","goapp:Goapp!876@tcp(127.0.0.1:3306)/goapp?charset=utf8&parseTime=True&loc=Local")
   if err != nil {
		fmt.Println("mysql链接出错=",err)
   } else {
   		fmt.Println("mysql数据库链接成功!!")
   }
}
