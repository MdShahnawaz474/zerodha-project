const { model } = require("mongoose");
const { PositionsSchema } = require("../schema/PositionsSchema");

// Create a model from the schema
const PositionModel = model("position", PositionsSchema);

module.exports = { PositionModel };
