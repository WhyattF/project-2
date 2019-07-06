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

// foodItemRouter.get('/', (req, res) => {
//     const mealId = req.params.mealId
//     req.body.mealId = req.params.mealId
//     foodItemApi.getFoodItems(mealId, req.body)
//     .then((foodItem) => {
//         res.render('foodItems/foodItems', {foodItem})
//     })
// })

foodItemRouter.post('/', (req, res) => {
    const mealId = req.params.mealId
    foodItemApi.addFoodItem(mealId, req.body)
      .then(() => {
        res.redirect(`/meals/${mealId}`)
      })
  })

  foodItemRouter.get('/new', (req, res) => {
    const mealId = req.params.mealId
    res.render('foodItems/newFoodItemForm', {mealId})
})

foodItemRouter.get('/:foodItemId/edit', (req,res) => {
    foodItemApi.getfoodItemById(req.params.foodItemId)
     .then((foodItem) => {
         res.send('foodItem/editFoodItemForm', {foodItem})
     })
})

foodItemRouter.get('/meals/:mealId/foodItems', (req, res) => {
    foodItemApi.viewFoodItemsByMealId(req.params.mealId)
    .then((mealId) => {
        res.render(`/meals/${mealId}/foodItems/viewFoodItems`, {mealId})
    })
})

foodItemRouter.put('/:foodItemId', (req, res) => {
    foodItemApi.updatefoodItem(req.params.foodItemId, req.body)
     .then(() => {
         res.redirect('/foodItems')
     })
})

foodItemRouter.delete('/:foodItemId', (req, res) => {
    foodItemApi.deletefoodItem(req.params.foodItemId)
     .then(() => {
         res.redirect('/foodItems')
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
