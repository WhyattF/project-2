const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodItemSchema = new mongoose.Schema({
 name: ({
    type: String,
    mealId: mongoose.Types.ObjectId
  })
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodItemCollection = mongoose.model('FoodItem', FoodItemSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getFoodItemsByMealId(mealId) {
  return FoodItemCollection.findById({mealId: mealId})
}

function getfoodItemsByFoodId(foodId) {
    return FoodItemCollection.findById({foodId: foodId})
}

function addFoodItem(foodItemObject) {
  return FoodItemCollection.create(foodItemObject)
}

function updateFoodItem(foodId, foodItemObject) {
    return ListCollection.findByIdAndUpdate(foodId, foodItemObject)
  }
  
  function deleteFoodItem(foodId) {
    return ListCollection.findByIdAndDelete(foodId)
  }


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    getFoodItemsByMealId,
    getfoodItemsByFoodId,
    addFoodItem,
    createFoodItem,
    updateFoodItem,
    deleteFoodItem

}