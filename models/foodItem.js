const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mealId: {
        type: mongoose.Types.ObjectId
    },
    categoryId: {
        type: mongoose.Types.ObjectId
    }
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
    return FoodItemCollection.find({ mealId: mealId })
}

function getFoodItemsByFoodId(mealId, foodId) {
    return FoodItemCollection.findById(mealId, foodId)
}

function viewFoodItemsByMealId(mealId) {
    return FoodItemCollection.find({mealId: mealId})
}

function addFoodItem(mealId, foodItemObject) {
    console.log(mealId)
    foodItemObject.mealId = mealId
    return FoodItemCollection.create(foodItemObject)
}

function updateFoodItem(foodId, foodItemObject) {
    return FoodItemCollection.findByIdAndUpdate(foodId, foodItemObject)
}

function deleteFoodItem(foodId) {
    return FoodItemCollection.findByIdAndDelete(foodId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    getFoodItemsByMealId,
    getFoodItemsByFoodId,
    viewFoodItemsByMealId,
    addFoodItem,
    updateFoodItem,
    deleteFoodItem
}