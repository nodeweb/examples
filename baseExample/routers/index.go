package routers

import (
	"github.com/gin-gonic/gin"
	"baseExample/apis"
)

func RouterInit() *gin.Engine {
	r := gin.Default()

	r.GET("/api/wxoid",apis.Index)

	return r
}
