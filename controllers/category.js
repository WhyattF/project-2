// import express
const express = require('express')

// import api files from models
const categoryApi = require('../models/category.js')
// const foodItemApi = require('../models/foodItem.js')

// create router
const categoryRouter = express.Router()

// request handlers
categoryRouter.get('/', (req, res) => {
    categoryApi.getCategories()
    .then((category) => {
        res.render('categories/categories', {category})
    })
    console.log(categoryApi.getcategorys)
    })
    // .catch((err) => {
    //  res.send(err)
    //  })

categoryRouter.post('/', (req, res) => {   
    categoryApi.addCategory(req.body)
    .then(() => {
        res.redirect('/categories')
    })
    })
    // .catch((err) => {
    //     res.send(err)
    // })

categoryRouter.get('/new', (req, res) => {
    res.render('categories/newcategoryForm')
})

categoryRouter.get('/:categoryId', (req, res) => {
    categoryApi.getCategory(req.params.categoryId)
      .then((category) => {
         res.render('categories/singlecategory', {category})
          })
      })

categoryRouter.delete('/:categoryId', (req, res) => {
    categoryApi.deleteCategory(req.params.categoryId)
     .then(() => {
         res.redirect('/categories')
     })
})

// export router
module.exports = {
    categoryRouter
}