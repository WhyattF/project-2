// import express
const express = require('express')

// import api files from models
const mealApi = require('../models/meal.js')
// const foodItemApi = require('../models/foodItem.js')

// create router
const mealRouter = express.Router()

// request handlers
mealRouter.get('/', (req, res) => {
    mealApi.getMeals()
    .then((meals) => {
        res.render('meals/meals', {meals})
    })
    console.log(mealApi.getMeals)
    })
    // .catch((err) => {
    //  res.send(err)
    //  })

mealRouter.post('/', (req, res) => {   
    mealApi.addMeal(req.body)
    .then(() => {
        res.redirect('/meals')
    })
    })
    // .catch((err) => {
    //     res.send(err)
    // })

mealRouter.get('/new', (req, res) => {
    res.render('meals/newMealForm')
})

mealRouter.get('/:mealId', (req, res) => {
    mealApi.getMeal(req.params.mealId)
      .then((meal) => {
         res.render('meals/singleMeal', {meal})
          })
      })


mealRouter.get('/:mealId/edit', (req, res) => {
    mealApi.getmeal(req.params.mealId)
     .then((meal) => {
         res.render('meals/editMealForm', {meal})
     })
})

mealRouter.put('/:mealId', (req, res) => {
    mealApi.updateMeal(req.params.mealId, req.body)
     .then(() => {
         res.redirect('/meals')
     })
})

mealRouter.delete('/:mealId', (req, res) => {
    mealApi.deleteMeal(req.params.mealId)
     .then(() => {
         res.redirect('/meals')
     })
})

// export router
module.exports = {
    mealRouter
}