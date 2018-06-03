package main

import (
	"baseExample/routers"
	"baseExample/mysqlConf"
)

func main(){
	db := mysqlConf.Mydb
	defer db.Close()

	router := routers.RouterInit()
	router.Run()
}
