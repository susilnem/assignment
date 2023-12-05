package router

import (
	controller "go-jwt/controllers"
	middleware "go-jwt/middlewares"

	"github.com/gin-gonic/gin"
)

func GetRoute(app *gin.Engine) {

	userRouter := app.Group("/api/users")
	userRouter.Use(middleware.JWTAuthMiddleware())
	{
		userRouter.GET("/", controller.GetUsers)
	}

}
