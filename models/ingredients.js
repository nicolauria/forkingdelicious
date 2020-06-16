const mongoose = require("mongoose");
const mongoolia = require("mongoolia").default;

const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  name: { type: Schema.Types.String },

  quantity: { type: Schema.Types.Number },

  unit: { type: Schema.Types.String },

  recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
});

// Spencer, what are the requirements for the "indexName" here?
IngredientsSchema.plugin(mongoolia, {
  appId: "ZCHNRWDF6B",
  apiKey: "af3f80f79bfd2b7d0e7832aba6f0a582",
  indexName: "ingredientsDB",
});

const Ingredients = mongoose.model("Ingredients", IngredientsSchema);

module.exports = Ingredients;
