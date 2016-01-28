package module

import(
   "fmt"
   "net/http"
   "database/sql"
   "encoding/json"
   "html/template"
  _"github.com/go-sql-driver/mysql"
   "github.com/srinathgs/mysqlstore"
)

const viewUrl = "/www/gowork/src/github.com/nodeweb/views/"

type httpFunc func(http.ResponseWriter, *http.Request)
type myss *mysqlstore.MySQLStore
type mydb *sql.DB

func Index(store *mysqlstore.MySQLStore,db *sql.DB) httpFunc{
 f :=func (w http.ResponseWriter,r *http.Request){
     t,err := template.ParseFiles(viewUrl+"index.html",viewUrl+"header.html",viewUrl+"footer.html")
     fmt.Println("terr==",err)
     p := mydata(db)
     session,err:=store.Get(r,"xUser")
     fmt.Println("BBB=",err)
     session.Values["foo"] = "bar"
     session.Values[42] = 43
     session.Save(r, w)

     t.Execute(w,p)
 }
 return f
}

func Test(store *mysqlstore.MySQLStore,db *sql.DB) httpFunc{
 f :=func (w http.ResponseWriter,r *http.Request){
   m := "Hello World!"
   session,_:=store.Get(r,"xUser")
   fmt.Println("foo=",session.Values["foo"])
   fmt.Println("42=",session.Values)
   fmt.Fprint(w,m)
 }
 return f
}

func Datz(store *mysqlstore.MySQLStore,db *sql.DB) httpFunc{
 f := func (w http.ResponseWriter,r *http.Request){
   w.Header().Add("Access-Control-Allow-Origin", "*")
   d := mydata(db)
   t,_ := json.Marshal(d)
   fmt.Fprint(w,string(t))
 }
 return f
}

//---------------Function--------

func mydata(db *sql.DB) []interface{} {
   rows, err := db.Query("SELECT * FROM person")
   defer rows.Close()
   checkErr(err)

   type Person struct{
        Id int
        Name string
        Sex  string
        Phone string
   }


   var(
     id int
     name string
     sex string
     phone string
   )

   var pmore []interface{}

   for rows.Next() {
      err :=  rows.Scan(&id,&name,&sex,&phone)
      checkErr(err)
      person := Person{
          Id:id,
          Name:name,
          Sex:sex,
          Phone:phone,
     }
      b,_ := json.Marshal(person)
      fmt.Println("bb=",string(b))
      pmore = append(pmore,person)
      c,_ := json.Marshal(pmore)
      fmt.Println("pmore1=",string(c))
   }
   return pmore
}
//检测错误
func checkErr(err error) {
        if err != nil {
                fmt.Println(err)
                panic(err)
        }
}

