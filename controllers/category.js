// import express
const express = require('express')

// import api files from models
const categoryApi = require('../models/category.js')
// const foodItemApi = require('../models/foodItem.js')

// create router
const categoryRouter = express.Router()

// request handlers
categoryRouter.get('/', (req, res) => {
    categoryApi.getcategorys()
    .then((category) => {
        res.render('categories/categories', {category})
    })
    console.log(categoryApi.getcategorys)
    })
    // .catch((err) => {
    //  res.send(err)
    //  })

categoryRouter.post('/', (req, res) => {   
    categoryApi.addcategory(req.body)
    .then(() => {
        res.redirect('/categorys')
    })
    })
    // .catch((err) => {
    //     res.send(err)
    // })

categoryRouter.get('/new', (req, res) => {
    res.render('categorys/newcategoryForm')
})

categoryRouter.get('/:categoryId', (req, res) => {
    categoryApi.getcategory(req.params.categoryId)
      .then((category) => {
         res.render('categorys/singlecategory', {category})
          })
      })


categoryRouter.get('/:categoryId/edit', (req, res) => {
    categoryApi.getcategory(req.params.categoryId)
     .then((category) => {
         res.render('categorys/editcategoryForm', {category})
     })
})

categoryRouter.put('/:categoryId', (req, res) => {
    categoryApi.updatecategory(req.params.categoryId, req.body)
     .then(() => {
         res.redirect('/categorys')
     })
})

categoryRouter.delete('/:categoryId', (req, res) => {
    categoryApi.deletecategory(req.params.categoryId)
     .then(() => {
         res.redirect('/categorys')
     })
})

// export router
module.exports = {
    categoryRouter
}