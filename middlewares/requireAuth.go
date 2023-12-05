package middleware

import (
	"go-jwt/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

func JWTAuthMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		err := utils.ValidateJWT(context)
		if err != nil {
			context.JSON(http.StatusUnauthorized, gin.H{"error": "Authentication required"})
			context.Abort()
			return
		}
		context.Next()
	}
}

func AdminAuthMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		err := utils.ValidateAdminJWT(context)
		if err != nil {
			context.JSON(http.StatusUnauthorized, gin.H{"error": "You don't have permission to access this route"})
			context.Abort()
			return
		}
		context.Next()
	}
}
