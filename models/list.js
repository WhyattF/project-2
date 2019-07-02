// import mongoose connection
const mongoose = require('./connection.js')

// create model schema 
const ListSchema = new mongoose.Schema({
  name: {type: String, trim: true, default: ''}
})


// create collection API
 const ListCollection = mongoose.model('List', ListSchema)

function getLists() {
  return 
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
getLists
}
