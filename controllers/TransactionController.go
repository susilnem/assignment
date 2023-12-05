package controller

import (
	"go-jwt/database"
	"go-jwt/internal/format_errors"
	"go-jwt/internal/pagination"
	model "go-jwt/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type TransactionInput struct {
	Date          string `json:"date" binding:"required"`
	From          string `json:"from" binding:"required"`
	To            string `json:"to" binding:"required"`
	Account       string `json:"account" binding:"required"`
	Amount        int    `json:"amount" binding:"required"`
	PaymentMethod string `json:"payment_method" binding:"required"`
}

// @BasePath /api/transaction
// @Summary Create Transaction
// @Description Create new transaction
// @Tags Transaction
// @Accept json
// @Produce json
// @Param input body TransactionInput true "Create Transaction"
// @Success 200 {object} string "ok"
// @Router /transaction/create [post]
// @Security Bearer
func CreateTransaction(c *gin.Context) {
	var input TransactionInput

	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newTransaction := model.Transaction{
		Date:          input.Date,
		From:          input.From,
		To:            input.To,
		Account:       input.Account,
		Amount:        input.Amount,
		PaymentMethod: input.PaymentMethod,
	}

	database.Database.Create(&newTransaction)

	c.JSON(http.StatusOK, gin.H{"data": newTransaction})
}

// @BasePath /api/transaction
// @Summary Get Transactions
// @Description Get all transactions
// @Tags Transaction
// @Accept json
// @Produce json
// @Success 200 {object} string "ok"
// @Router /transaction/ [get]
// @Security Bearer
func GetTransactions(c *gin.Context) {
	var transactions []model.Transaction

	//set default page and perPage
	pageStr := c.DefaultQuery("page", "1")
	page, _ := strconv.Atoi(pageStr)

	perPageStr := c.DefaultQuery("perPage", "5")
	perPage, _ := strconv.Atoi(perPageStr)

	result, err := pagination.Paginate(database.Database, page, perPage, nil, &transactions)
	if err != nil {
		format_errors.InternalServerError(c)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"result": result,
	})

}
