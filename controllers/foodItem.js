const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const foodItemApi = require('../models/foodItem.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const foodItemRouter = express.Router({mergeParams: true})

foodItemRouter.get('/new', (req, res) => {
    const mealId = req.params.mealId
  res.render('foodItems/newFoodItemForm', {mealId})
})

foodItemRouter.get('/:foodItemId', (req, res) => {
    console.log(req.params)
    const foodId = req.params.foodItemId
    foodItemApi.getFoodItemsByFoodId(foodId)
    .then((foodItem) => {
        console.log(foodId)
        res.render('foodItems/singleFoodItem', {foodItem, mealId: req.params.mealId})
    })
    .catch((err) => {
        res.send(err)
      })
})


foodItemRouter.post('/', (req, res) => {
    const mealId = req.params.mealId
    foodItemApi.addFoodItem(mealId, req.body)
      .then(() => {
        res.redirect(`/meals/${mealId}`)
      })
  })


foodItemRouter.get('/:foodItemId/edit', (req,res) => {
    foodItemApi.getFoodItem(req.params.foodItemId)
     .then((foodItem) => {
         res.render('foodItem/editFoodItemForm', {foodItem})
     })
})

foodItemRouter.get('/', (req, res) => {
    foodItemApi.viewFoodItemsByMealId(req.params.mealId)
    .then((foodItems) => {
        console.log(foodItems)
        res.render('foodItems/viewFoodItems', {foodItems, mealId: req.params.mealId})
    })
})

foodItemRouter.put('/:foodItemId', (req, res) => {
    foodItemApi.updatefoodItem(req.params.foodItemId, req.body)
     .then(() => {
         res.redirect('/foodItems')
     })
})

foodItemRouter.delete('/:foodItemId', (req, res) => {
    foodItemApi.deleteFoodItem(req.params.foodItemId)
    .then(() => {
        const mealId = req.params.mealId
         res.redirect(`/meals/${mealId}/foodItems`)
     })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  foodItemRouter
}
