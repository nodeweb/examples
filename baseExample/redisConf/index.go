package redisConf

import (
	"github.com/go-redis/redis"
	"fmt"
)

var Client *redis.Client

func init()  {

	Client = redis.NewClient(&redis.Options{
		Addr:"localhost:6379",
		Password:"",
		DB:0,
	})
	pong,err := Client.Ping().Result()
	if err != nil {
		fmt.Println("redis链接出错=",err)
	} else {
		fmt.Println("redis链接成功!!!=",pong)
	}
}
