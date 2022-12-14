const mongoose = require('mongoose')
const {Schema} = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

// {
//   name: 'Rye',
//   hasGluten: true,
//   image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?
//   ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8
//   fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
// }
