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
const foodItemRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
foodItemRouter.get('/', (req, res) => {
    foodItemApi.getFoodItems()
        .then((foodItems) => {
            res.render('food-items/food-items', {foodItems})
        })
        .catch((err) => {
            res.send(err)
        })
})

foodItemRouter.post('/', (req, res) => {
    foodItemApi.addFoodItem(req.body)
        .then(() => {
            res.redirect('/food-items')
        })
        .catch((err) => {
            res.send(err)
        })
})

foodItemRouter.get('/new', (req, res) => {
    res.render('food-items/newFoodItemForm')
})

foodItemRouter.get('/:foodItemId/edit', (req, res) => {
    foodItemApi.getfoodItem(req.params.foodItemId)
    .then((foodItem) => {
        res.render('food-items/singleFoodItem', {foodItem})
    })
})

foodItemRouter.put('/:foodItemId', (req, res) => {
    foodItemApi.updateFoodItem(req.params.foodItemId)
        .then(() => {
            res.redirect('/food-items')
        })
})

foodItemRouter.delete('/:foodItemId', (req, res) => {
    foodItemApi.deleteFoodItem(req.params.foodItemId)
        .then(() => {
            res.redirect('/food-items')
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