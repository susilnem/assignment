package model

import (
	"gorm.io/gorm"
)

type Transaction struct {
	gorm.Model
	Date          string `gorm:"size:255;not null;" json:"date"`
	From          string `gorm:"size:255;not null;" json:"from"`
	To            string `gorm:"size:255;not null;" json:"to"`
	Amount        int    `gorm:"size:255;not null;" json:"amount"`
	Account       string `gorm:"size:255;not null;" json:"account"`
	PaymentMethod string `gorm:"size:255;not null;" json:"payment_method"`
}
