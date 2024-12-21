
const {model} = require("mongoose")

const {HoldingsSchema }=require("../schema/holdingsSchema") 



const HoldingsModel = new model ("holding",HoldingsSchema)

module.exports = {HoldingsModel}