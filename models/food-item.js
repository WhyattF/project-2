const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodItemSchema = new mongoose.Schema({
 name: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodItemCollection = mongoose.model('FoodItems', FoodItemSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getFoodItems() {
  return FoodItemCollection.find()
}

function addFoodItem(foodItemObject) {
  return FoodItemCollection.create(foodItemObject)
}

function getFoodItem(foodItemId) {
  return FoodItemCollection.findById(foodItemId)
}

function updateFoodItem(foodItemId,foodItemObject) {
  return FoodItemCollection.findByIdAndUpdate(foodItemId, foodItemObject)
}

function deleteFoodItems(foodItemId) {
  return FoodItemCollection.findByIdAndDelete(foodItemId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getFoodItems,
  addFoodItem,
  getFoodItem,
  updateFoodItem,
  deleteFoodItems
}