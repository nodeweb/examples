package main

import (
	"baseExample/routers"
	"baseExample/mysqlConf"
	"baseExample/redisConf"
)

func main(){
	db := mysqlConf.Mydb
	redb := redisConf.Client
	defer db.Close()
	defer redb.Close()

	router := routers.RouterInit()
	router.Run()
}
