package main

import(
   "os"
   "fmt"
   "time"
   "syscall"
   "net/http"
   "database/sql"
  _"github.com/go-sql-driver/mysql"
   "github.com/srinathgs/mysqlstore"
   "github.com/nodeweb/routes"
)

var db *sql.DB

const dbUrl = "root:MYSQL*rootabc123@tcp(localhost:3306)/goapp?charset=utf8&parseTime=true&loc=Local"

func init() {
   db, _ = sql.Open("mysql",dbUrl)
   db.SetMaxOpenConns(2000)
   db.SetMaxIdleConns(1000)
   db.Ping()
}


func main(){
 logFile :="./logs/nodeweb_error"
 tipsLine:="\n=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=\n" 
 if crashFile, err := os.OpenFile(fmt.Sprintf("%v--crash.log", logFile), os.O_WRONLY|os.O_APPEND|os.O_CREATE, 0664); err == nil { 
    crashFile.WriteString(fmt.Sprintf("%s%v Opened crashfile at %v%s",tipsLine,os.Getpid(), time.Now(),tipsLine)) 
    os.Stderr = crashFile 
    syscall.Dup2(int(crashFile.Fd()), 2) 
 }      
   
   store,_ := mysqlstore.NewMySQLStoreFromConnection(db,"sessionstore", "/", 3600, []byte("secret-key"))
   defer store.Close()

   http.Handle("yz.x-ui.com/public/",http.StripPrefix("/public/",http.FileServer(http.Dir("./public/"))))
   http.Handle("yz.x-ui.com/",routes.Handler(store,db))
   if err:= http.ListenAndServe(":80",nil); err != nil {
      panic(err)
   }

}


