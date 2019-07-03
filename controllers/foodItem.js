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

foodItemRouter.get('/', (req, res) => {
    req.body.meald = req.params.listId

    foodItemApi.getFoodItems()
    .then((foodItem) => {
        res.render('foodItems/foodItems', {foodItem})
    })
})

foodItemRouter.post('/', (req, res) => {
    req.body.listId = req.params.listId
    foodItemApi.addFood(req.body)
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
