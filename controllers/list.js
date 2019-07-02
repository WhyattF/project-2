// import express
const express = require('express')

// import api files from models
const listApi = require('../models/list.js')
// const foodItemApi = require('../models/foodItem.js')

// create router
const listRouter = express.Router()

// request handlers
listRouter.get('/', (req, res) => {
        res.send(listApi.getLists())
        console.log(listApi.getLists)
    })
    // .catch((err) => {
    //  res.send(err)
    //  })

listRouter.post('/', (req, res) => {   
     res.send(listApi.getList(req.body))
     console.log(listApi.getList(req.body))
    })
    // .catch((err) => {
    //     res.send(err)
    // })

// listRouter.get('/new', (req, res) => {
//     res.send('lists/newListForm')
// })

// listRouter.get('/:listId/edit', (req,res) => {
//     listApi.getList(req.params.listId)
//      .then((list) => {
//          res.send('list/editListForm', {list})
//      })
// })

// listRouter.put('/:listId', (req, res) => {
//     listApi.updateList(req.params.listId, req.body)
//      .then(() => {
//          res.redirect('/lists')
//      })
// })

// listRouter.delete('/:listId', (req, res) => {
//     listApi.deleteList(req.params.listId)
//      .then(() => {
//          res.redirect('/lists')
//      })
// })

// export router
module.exports = {
    listRouter
}