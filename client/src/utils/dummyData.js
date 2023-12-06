const moment  = require("moment");

module.exports = Object.freeze({
    RECENT_TRANSACTIONS: [
        {
            date: moment().subtract(1, "days"),
            from: "John Doe",
            to: "Sandip store",
            account: "Savings",
            amount: 1000,
            paymentMethod: "Paypal"
        },
        {
            date: moment().subtract(2, "days"),
            from: "Peoples bank",
            to: "Jane Doe",
            account: "Savings",
            amount: 1000,
            paymentMethod: "Esewa"
        },
        {
            date: moment().subtract(3, "days"),
            from: "Iron man",
            to: "Nade asd",
            account: "Savings",
            amount: 10300,
            paymentMethod: "Khalti"
        },
        {
            date: moment().subtract(4, "days"),
            from: "American bank",
            to: "Space bank",
            account: "Savings",
            amount: 10200,
            paymentMethod: "Connect IPS"
        },
        {
            date: moment().subtract(5, "days"),
            from: "John Doe",
            to: "Jane Doe",
            account: "Savings",
            amount: 10700,
            paymentMethod: "Paypal"
        },
        {
            date: moment().subtract(6, "days"),
            from: "John Doe",
            to: "Jane Doe",
            account: "Savings",
            amount: 1000,
            paymentMethod: "Paypal"
        },
        {
            date: moment().subtract(7, "days"),
            from: "John Doe",
            to: "Jane Doe",
            account: "Savings",
            amount: 1000,
            paymentMethod: "Paypal"
        }
    ]
});