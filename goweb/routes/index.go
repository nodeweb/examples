package routes

import(
   "net/http"
   "database/sql"
  _"github.com/go-sql-driver/mysql"
   "github.com/gorilla/mux"
   "github.com/srinathgs/mysqlstore"
   "github.com/nodeweb/module"
)


func Handler(store *mysqlstore.MySQLStore,db *sql.DB) http.Handler{
   r := mux.NewRouter()
//----Theme-----------------------------------------------------

   r.HandleFunc("/",module.Index(store,db)).Methods("GET")
   r.HandleFunc("/test",module.Test(store,db)).Methods("GET")
   r.HandleFunc("/data",module.Datz(store,db)).Methods("GET")   

//----X-UI------------------------------------------------------



//----over and return-------------------------------------------
   return r
}

