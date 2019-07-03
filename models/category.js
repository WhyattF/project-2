// import mongoose connection
const mongoose = require('./connection.js')

// create model schema 
const CategorySchema = new mongoose.Schema({
  name: {type: String, trim: true, default: ''}
})


// create collection API
const CategoryCollection = mongoose.model('Category', CategorySchema)

function getCategories() {
  return CategoryCollection.find()
}

function addCategory(categoryObject) {
  return CategoryCollection.create(categoryObject)
}

function getCategory(categoryId) {
  return CategoryCollection.findById(categoryId)
}

function updateCategory(categoryId, categoryObject) {
  return CategoryCollection.findByIdAndUpdate(categoryId, categoryObject)
}

function deleteCategory(categoryId) {
  return CategoryCollection.findByIdAndDelete(categoryId)
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */

module.exports = {
  getCategories,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory
}