package router

import (
	controller "go-jwt/controllers"
	middleware "go-jwt/middlewares"

	"github.com/gin-gonic/gin"
)

func Route(app *gin.Engine) {
	auth := app.Group("api/auth")
	{
		auth.POST("/register", controller.Register)
		auth.POST("/admin-register", controller.AdminRegister)
		auth.POST("/admin-login", controller.AdminLogin)
		auth.POST("/login", controller.Login)
	}

}

func TransactionRoute(app *gin.Engine) {
	transaction := app.Group("api/transaction")
	transaction.Use(middleware.AdminAuthMiddleware())
	{
		transaction.POST("/create", controller.CreateTransaction)
		transaction.GET("/", controller.GetTransactions)
	}
}
