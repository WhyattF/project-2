const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const MealSchema = new mongoose.Schema({
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
const MealCollection = mongoose.model('Meal', MealSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getMeals() {
    return MealCollection.find()
}

function addMeal(mealObject) {
    return MealCollection.create(mealObject)
}

function getMeal(mealId) {
    return MealCollection.findById(mealId)
}

function updateMeal(mealId, mealObject) {
    return MealCollection.findByIdAndUpdate(mealId, mealItemObject)
  }
  
  function deleteMeal(mealId) {
    return MealCollection.findByIdAndDelete(mealId)
  }


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    getMeals,
    getMeal,
    addMeal,
    updateMeal,
    deleteMeal
}