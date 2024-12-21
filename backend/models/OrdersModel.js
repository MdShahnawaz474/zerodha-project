
const {model} = require("mongoose")

const {OrdersSchema} = require("../schema/ordersSchema")

const OrdersModel = new model ("orders", OrdersSchema  )

module.exports(OrdersModel)